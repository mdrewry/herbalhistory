import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contain from "../components/Contain";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { auth, firestore } from "../firebase";
import { ContainedButton } from "../components/Buttons";


const getSessions = async () => {
  let sessions = {}
  var user = auth.currentUser["uid"];
  const all_sess = firestore.collection('sessions');
  const userSessions = await all_sess.where('userID', '==', user).get();
  if (userSessions.empty) {
    console.log('No matching documents.');
    return;
  }
  userSessions.forEach(doc => {
    sessions[doc.data()['date'].toDate().toISOString().split('T')[0]] = {marked: true, dotColor: 'blue', activeOpacity: 0}
  });
  console.log(sessions)
};



export default function History() {
  return (
    <Contain>
      <Text>History</Text>
      <Calendar
      // somehow make this from the dates that i get from getSessions()
      //this giving me errors when i switch it to {sessions}
      markedDates={{
        '2021-03-18': {marked: true, dotColor: 'blue', activeOpacity: 0},
      }}
      // Initially visible month. Default = Date()
      current = {new Date()}
      // Handler which gets executed on day press. Default = undefined
      // *********this should open up the existing session if it has one or something like that
      onDayPress={(day) => {console.log('selected day', day)}}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={(day) => {console.log('selected day', day)}}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy MM'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={(month) => {console.log('month changed', month)}}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={true}
      // Replace default month and year title with custom one. the function receive a date as parameter.
      renderHeader={(date) => {/*Return JSX*/}}
      // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}
      />
      <ContainedButton handlePress={getSessions} text="GetSessions" />
    </Contain>
  );
}

const styles = StyleSheet.create({});
