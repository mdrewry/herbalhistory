import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScrollPage from "../components/ScrollPage";
import moment from "moment";
import CalendarLogo from "../res/CalendarLogo";
import SmileLogo from "../res/SmileLogo";
import LineLogo from "../res/LineLogo";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ViewSession({navigation}) {
  
  const [date, setDate] = useState(new Date());
  const displayDate = moment(date).format("MMM DD YYYY h:mm a").split(" ");
  
  const handleHistory = () => {
    navigation.navigate("History");
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
        <View style={{alignItems: "center"}}>
          <TouchableOpacity onPress={handleHistory} style={styles.circle}>
            <CalendarLogo/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productHeader}>
        <Text style={styles.prodInf}>Product Information</Text>
        <Text style={styles.smallFont}>Strain:</Text>
        <Text style={styles.normalFont}>Wedding Cake</Text>
        <Text style={styles.smallFont}>THC/CBD Ratio:</Text>
        <View style={styles.ratio}>
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
      {/* <Text style={styles.prodInf}>Product Information</Text>
      <Text style={styles.strain1}>Strain:</Text>
      <Text style={styles.strain2}>Wedding Cake</Text>
      <Text style={styles.ratio1}>THC/CBD Ratio:</Text>
      <Text style={styles.ratio2}>22% THC; Unknown %CBD</Text>
      <Text style={styles.type1}>Type:</Text>
      <Text style={styles.type2}>Hybrid</Text>
      <Text style={styles.disp1}>Dispensary:</Text>
      <Text style={styles.disp2}>Curaleaf</Text>
      <Text style={styles.meth1}>Method:</Text>
      <Text style={styles.meth2}>Vaporizer</Text>
      <Text style={styles.dose1}>Dosage:</Text>
      <Text style={styles.dose2}>1 Bowl</Text>
      <Text style={styles.dose3}>Onset of Effect (Time from Intake):</Text>
      <Text style={styles.dose4}>0 hours, 5 minutes</Text>
      <Text style={styles.dose5}>Duration of Effect:</Text>
      <Text style={styles.dose6}>2 hours, 30 minutes</Text>
      <View style={styles.line1}>
        <LineLogo/>
      </View>
      <FontAwesome5 style={styles.calendar}name={'calendar'}/>
      <Text style={styles.mood}>Overall Mood</Text>
      <FontAwesome5 style={styles.mood1}name={'sad-tear'} />
      <FontAwesome5 style={styles.mood2}name={'frown'} />
      <FontAwesome5 style={styles.mood3}name={'meh'} />
      <FontAwesome5 style={styles.mood4}name={'smile'} />
      <FontAwesome5 style={styles.mood5}name={'laugh'} />
      <FontAwesome5 style={styles.mood6}name={'laugh-squint'} />
      <Text style={styles.words1}>Mood Words</Text>
      <Text style={styles.words2}>Uplifted, Relaxed, Happy</Text>
      <Text style={styles.pos1}>Positive Effects</Text>
      <Text style={styles.pos2}>Muscle Relief, Relaxation, Pain Relief</Text>
      <Text style={styles.neg1}>Negative Effects</Text>
      <Text style={styles.neg2}>Dry Eyes, Dry Mouth</Text>
      <View style={styles.line2}>
        <LineLogo/>
      </View>
      <Text style={styles.custom1}>Custom Section: Anxiety</Text>
      <Text style={styles.bef1}>Anxiety Level Before Intake:</Text>
      <Text style={styles.bef2}>7 out of 10</Text>
      <Text style={styles.af1}>Anxiety Level After Intake:</Text>
      <Text style={styles.af2}>0 out of 10</Text>
      <Text style={styles.conc1}>Good Product for Anxiety<FontAwesome5 name={'check-circle'}/></Text>
      <View style={styles.line3}>
        <LineLogo/>
      </View>
      <Text style={styles.custom2}>Custom Section: Sleep</Text>
      <Text style={styles.bef3}>Restlessness/Energy Before Intake:</Text>
      <Text style={styles.bef4}>7 out of 10</Text>
      <Text style={styles.af3}>Restlessness/Energy After Intake:</Text>
      <Text style={styles.af4}>0 out of 10</Text>
      <Text style={styles.desc1}>Sleep Description</Text>
      <Text style={styles.desc2}>{'\n'}    Slept 8 hours without getting up in the middle of the night.</Text>
      <Text style={styles.conc2}>Good Product for Sleep<FontAwesome5 name={'check-circle'}/></Text> */}


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
    textTransform: 'uppercase',
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
    textTransform: 'uppercase',
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
  },
  normalFont: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  ratio: {
    flexDirection: 'row',
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
    borderRadius: 70/2,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },

});
