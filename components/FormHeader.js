import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { FormNavButton, TextButton } from "./Buttons";
export default function FormHeader({ navigation, showDatePicker, date }) {
  const displayDate = moment(date).format("MMM DD YYYY h:mm a").split(" ");
  const handleCancel = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.header}>
      <View style={styles.dateTextWrapper}>
        <Text style={styles.headerTextMonth}>{displayDate[0]}</Text>
        <Text style={styles.headerTextDay}>{displayDate[1]}</Text>
        <Text style={styles.headerTextYear}>{displayDate[2]}</Text>
        <View style={styles.rowCenter}>
          <View style={styles.clockWrapper}>
            <Text style={styles.hourText}>{displayDate[3]}</Text>
          </View>
          <Text style={styles.amPmText}>{displayDate[4]}</Text>
        </View>
        <TextButton
          text="Time of Intake"
          textStyle={styles.openClockButtonText}
          handlePress={showDatePicker}
        />
      </View>
      <View>
        <FormNavButton text="cancel" handlePress={handleCancel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "25%",
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  headerText: {
    color: "#FEFBE9",
    fontSize: 45,
    fontFamily: "Sansita_700Bold",
  },
  dateTextWrapper: {
    alignItems: "center",
  },
  headerTextMonth: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  headerTextDay: {
    color: "#F6C453",
    fontSize: 65,
    fontFamily: "Sansita_700Bold",
    marginTop: -15,
  },
  headerTextYear: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
    marginTop: -15,
  },
  clockWrapper: {
    borderColor: "#183A1D",
    borderRadius: 50,
    borderWidth: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 5,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  amPmText: {
    position: "absolute",
    marginLeft: 70,
    color: "#183A1D",
    fontFamily: "Karla_700Bold",
    fontSize: 20,
  },
  hourText: {
    color: "#8E9098",
  },
  openClockButtonText: {
    fontFamily: "Karla_400Regular",
    fontSize: 13,
  },
});
