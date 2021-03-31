import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { StyleSheet, Text, View } from "react-native";
import Contain from "../components/Contain";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { auth, firestore } from "../firebase";
import { ContainedButton } from "../components/Buttons";
import ViewSession from "./ViewSession";

export default function History({ navigation, user }) {
  const [sessions, setSessions] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const sessionsRef = firestore
      .collection("sessions")
      .where("userID", "==", user.id);
    const unsubscribeSessions = sessionsRef.onSnapshot((snapshot) => {
      setSessions(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    const unsubscribeNavPressed = navigation.addListener("tabPress", (e) => {
      // e.preventDefault();
      setPage(0);
    });
    return () => {
      unsubscribeSessions();
      unsubscribeNavPressed();
    };
  }, []);
  const handleSessionClick = () => {
    setPage(1);
  };
  return (
    <>
      {page === 0 && (
        <Contain>
          <Text>History</Text>
          <Calendar
            markingType={"custom"}
            // somehow make this from the dates that i get from getSessions()
            //this giving me errors when i switch it to {sessions}
            markedDates={{
              "2021-03-23": {
                selected: true,
                marked: true,
                dotColor: "red",
                activeOpacity: 0,
              },
            }}
            markedDates={{
              "2021-03-23": {
                marked: true,
                dotColor: "#183a1d",
                customStyles: {
                  container: {
                    backgroundColor: "#F6C453",
                  },
                  text: {
                    color: "black",
                    fontWeight: "bold",
                  },
                },
              },
            }}
            // Initially visible month. Default = Date()
            current={new Date()}
            // Handler which gets executed on day press. Default = undefined
            // *********this should open up the existing session if it has one or something like that
            onDayPress={handleSessionClick}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"yyyy MM"}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {}}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={(addMonth) => addMonth()}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter.
            renderHeader={(date) => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
          />
        </Contain>
      )}
      {sessions.map((session, key) => (
        <Fragment key={key}>
          {page - 1 === key && (
            <ViewSession session={session} setPage={setPage} />
          )}
        </Fragment>
      ))}
    </>
  );
}

const styles = StyleSheet.create({});
