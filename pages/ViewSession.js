import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScrollPage from "../components/ScrollPage";
import moment from "moment";
import LineLogo from "../res/LineLogo";
import TextBox from "../res/TextBox";
import OutcomeBar from "../res/OutcomeBar";
import OutcomeSlider from "../res/OutcomeSlider";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function ViewSession({ daySessions, setPage }) {
  console.log(daySessions);
  const displayDate = moment().format("MMM DD YYYY h:mm a").split(" ");
  const handleHistory = () => {
    setPage(0);
  };

  return (
    <ScrollPage>
      <View style={styles.header}>
        <View style={styles.dateTextWrapper}>
          <Text style={styles.headerTextMonth}>{displayDate[0]}</Text>
          <Text style={styles.headerTextDay}>{displayDate[1]}</Text>
          <Text style={styles.headerTextYear}>{displayDate[2]}</Text>
          <View style={styles.rowCenter}>
            <Text style={styles.hourText}>{displayDate[3]}</Text>
            <Text style={styles.amPmText}>{displayDate[4]}</Text>
          </View>
        </View>
      </View>

      <View style={styles.calendarButton}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={handleHistory} style={styles.circle}>
            <FontAwesome5 style={styles.calendar} name={"calendar-alt"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productHeader}>
        <Text style={styles.prodInf}>Product Information</Text>
        <Text style={styles.smallFont}>Strain:</Text>
        <Text style={styles.normalFont}>Wedding Cake</Text>
        <Text style={styles.smallFont}>THC/CBD Ratio:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.highlight}>22</Text>
          <Text style={styles.normalFont}>% THC; </Text>
          <Text style={styles.highlight}>Unknown</Text>
          <Text style={styles.normalFont}>% CBD</Text>
        </View>
        <Text style={styles.smallFont}>Type:</Text>
        <Text style={styles.normalFont}>Hybrid</Text>
        <Text style={styles.smallFont}>Dispensary:</Text>
        <Text style={styles.normalFont}>Curaleaf</Text>
        <Text style={styles.smallFont}>Method:</Text>
        <Text style={styles.normalFont}>Vaporizer</Text>
      </View>

      <View style={styles.header1}>
        <Text style={styles.smallText}>Dosage:</Text>
        <Text style={styles.textStyle}>1 Bowl</Text>
        <Text style={styles.smallText}>
          Onset of Effect (Time from Intake):
        </Text>
        <Text style={styles.textStyle}>0 hours, 5 minutes</Text>
        <Text style={styles.smallText}>Duration of Effect:</Text>
        <Text style={styles.textStyle}>2 hours, 30 minutes</Text>

        <View style={styles.line}>
          <LineLogo />
        </View>

        <Text style={styles.smallText}>Overall Mood</Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 style={styles.mood} name={"sad-tear"} />
          <FontAwesome5 style={styles.mood} name={"frown"} />
          <FontAwesome5 style={styles.mood} name={"meh"} />
          <FontAwesome5 style={styles.mood} name={"smile"} />
          <FontAwesome5 style={styles.mood} name={"laugh"} />
          <FontAwesome5 style={styles.mood1} name={"grin-beam"} />
        </View>
        <Text style={styles.smallText}>Mood Words</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.moodword1}>Uplifted</Text>
          <Text style={styles.textStyle}>, </Text>
          <Text style={styles.moodword2}>Relaxed</Text>
          <Text style={styles.textStyle}>, </Text>
          <Text style={styles.moodword3}>Happy</Text>
        </View>
        <Text style={styles.smallText}>Positive Effects</Text>
        <Text style={styles.textStyle}>
          Muscle Relief, Relaxation, Pain Relief
        </Text>
        <Text style={styles.smallText}>Negative Effects</Text>
        <Text style={styles.textStyle}>Dry Eyes, Dry Mouth</Text>

        <View style={styles.line}>
          <LineLogo />
        </View>

        <Text style={styles.prodInf}>Custom Section: Anxiety</Text>
        <Text style={styles.smallText}>Anxiety Level Before Intake:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textStyle1}>7</Text>
          <Text style={styles.textStyle}> out of 10</Text>
        </View>
        <Text style={styles.smallText}>Anxiety Level After Intake:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textStyle1}>0</Text>
          <Text style={styles.textStyle}> out of 10</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.smallText}>Good Product for Anxiety</Text>
          <FontAwesome5 style={styles.check} name={"check-circle"} />
        </View>

        <View style={styles.line}>
          <LineLogo />
        </View>

        <Text style={styles.prodInf}>Custom Section: Sleep</Text>
        <Text style={styles.smallText}>Restlessness/Energy Before Intake:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textStyle1}>7</Text>
          <Text style={styles.textStyle}> out of 10</Text>
        </View>
        <Text style={styles.smallText}>Restlessness/Energy After Intake:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textStyle1}>0</Text>
          <Text style={styles.textStyle}> out of 10</Text>
        </View>
        <Text style={styles.smallText}>Sleep Description:</Text>
        <View style={styles.textbox}>
          <TextBox />
          <View style={styles.textboxText}>
            <Text style={styles.smallText}>
              Slept 8 hours without getting up in the middle of the night.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.smallText}>Good Product for Sleep</Text>
          <FontAwesome5 style={styles.check} name={"check-circle"} />
        </View>

        <View style={styles.line}>
          <LineLogo />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.smallText}>Would Try Again</Text>
          <FontAwesome5 style={styles.check} name={"check-circle"} />
          <Text style={styles.smallText1}>Try Something Else</Text>
          <FontAwesome5 style={styles.check} name={"circle"} />
        </View>

        <View style={styles.outcome}>
          <Text style={styles.smallText}>Overall Outcome:</Text>
          <View style={styles.bar}>
            <OutcomeBar />
            <View style={styles.slider}>
              <OutcomeSlider />
              <Text style={styles.textStyle2}>5</Text>
            </View>
          </View>
          <View style={styles.exp}>
            <View style={styles.expHeader}>
              <Text style={styles.negative}>negative</Text>
              <Text style={styles.negative}>experience</Text>
            </View>
            <View style={styles.expHeader}>
              <Text style={styles.positive}>positive</Text>
              <Text style={styles.positive}>experience</Text>
            </View>
          </View>
        </View>

        <View style={styles.line}>
          <LineLogo />
        </View>

        <Text style={styles.smallText}>Other Notes:</Text>
        <View style={styles.textbox}>
          <TextBox />
          <View style={styles.textboxText}>
            <Text style={styles.smallText}>
              Did it with my roommate; we watched a movie and ate dinner.
            </Text>
          </View>
        </View>
      </View>
    </ScrollPage>
  );
}

const styles = StyleSheet.create({
  header: {
    // height: "25%",
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    // width: "90%",
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
    textTransform: "uppercase",
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
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  amPmText: {
    position: "absolute",
    marginLeft: 10,
    color: "#183A1D",
    fontFamily: "Karla_700Bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
  hourText: {
    color: "#183A1D",
    fontFamily: "Karla_700Bold",
    fontSize: 20,
    marginLeft: -40,
  },
  productHeader: {
    position: "absolute",
    left: 130,
    top: 60,
  },
  prodInf: {
    fontFamily: "Karla_700Bold",
    fontSize: 20,
    color: "#F1B779",
  },
  smallFont: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginTop: 5,
  },
  normalFont: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  highlight: {
    color: "#F6C453",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  calendarButton: {
    marginTop: 10,
    width: "33.33%",
  },
  circle: {
    backgroundColor: "#E1EEDD",
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  header1: {
    marginTop: 40,
    marginLeft: 30,
  },
  smallText: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginTop: 5,
  },
  smallText1: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginTop: 5,
    marginLeft: 10,
  },
  textStyle: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  textStyle1: {
    color: "#F6C453",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
    textDecorationLine: "underline",
  },
  textStyle2: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
    left: 8,
  },
  line: {
    marginTop: 10,
    height: 10,
    alignItems: "center",
    marginRight: 30,
  },
  calendar: {
    fontSize: 40,
    color: "#183A1D",
  },
  mood: {
    fontSize: 30,
    color: "#183A1D",
    marginRight: 14,
  },
  mood1: {
    fontSize: 30,
    color: "#F6C453",
  },
  moodword1: {
    color: "#CEA3F0",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  moodword2: {
    color: "#778E7B",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  moodword3: {
    color: "#EBCF3F",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  check: {
    fontSize: 22,
    color: "#183A1D",
    marginLeft: 4,
  },
  textbox: {
    marginTop: 5,
    marginBottom: 30,
  },
  textboxText: {
    position: "absolute",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 80,
  },
  bar: {
    marginTop: 10,
  },
  outcome: {
    marginTop: 10,
  },
  slider: {
    flexDirection: "column",
    position: "absolute",
    top: -5,
    left: 250,
  },
  negative: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginRight: -2,
  },
  positive: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginLeft: 165,
  },
  exp: {
    marginTop: 30,
    flexDirection: "row",
  },
  expHeader: {
    flexDirection: "column",
    alignItems: "center",
  },
});
