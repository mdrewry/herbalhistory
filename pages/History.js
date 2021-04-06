
import React, { useState, useEffect, Fragment } from "react";
import { StyleSheet } from "react-native";
import moment from "moment";
import { CalendarList } from "react-native-calendars";
import { firestore } from "../firebase";
import ViewSession from "./ViewSession";
import { UncenteredPage } from "../components/Page";

export default function History({ navigation, user }) {
  const [sessions, setSessions] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [page, setPage] = useState(0);
  useEffect(() => {
    const sessionsRef = firestore
      .collection("sessions")
      .where("userID", "==", user.id);
    const unsubscribeSessions = sessionsRef.onSnapshot((snapshot) => {
      let sessions = {};
      let markedDates = {};
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        const dateKey = moment(data.date.toDate()).format("YYYY-MM-D");
        if (sessions[dateKey] === undefined) sessions[dateKey] = [];
        sessions[dateKey].push({ ...data, id });
        markedDates[dateKey] = {
          customStyles: {
            container: {
              backgroundColor: "#E1EEDD",
              borderWidth: 2,
              borderColor: "#183A1D",
            },
            text: {
              color: "#F6C453",
            },
          },
        };
      });
      setSessions(sessions);
      setMarkedDates(markedDates);
    });
    const unsubscribeNavPressed = navigation.addListener("tabPress", (e) => {
      setPage(0);
    });
    return () => {
      unsubscribeSessions();
      unsubscribeNavPressed();
    };
  }, []);
  const handleSessionClick = (day) => {
    const key = day.dateString;
    if (sessions[key] === undefined) return;
    setPage(day.dateString);
  };
  return (
    <UncenteredPage>
      {page === 0 && (
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          markingType="custom"
          markedDates={markedDates}
          onDayPress={handleSessionClick}
          style={styles.calendar}
          theme={{
            backgroundColor: "#FEFBE9",
            calendarBackground: "#FEFBE9",
            textSectionTitleColor: "#F6C453",
            todayTextColor: "#F6C453",
            dayTextColor: "#183A1D",
            monthTextColor: "#F6C453",
            textDayFontFamily: "Karla_700Bold",
            textMonthFontFamily: "Sansita_700Bold",
            textDayHeaderFontFamily: "Sansita_700Bold",
            textDayFontSize: 20,
            textMonthFontSize: 30,
          }}
        />
      )}
      {Object.keys(sessions).map((sessionID, index) => (
        <Fragment key={index}>
          {page === sessionID && (
            <ViewSession daySessions={sessions[sessionID]} setPage={setPage} />
          )}
        </Fragment>
      ))}
    </UncenteredPage>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: "15%",
  },
});
