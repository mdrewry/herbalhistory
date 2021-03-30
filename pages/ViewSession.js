import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ScrollPage from "../components/ScrollPage";
import moment from "moment";
import CalendarLogo from "../res/CalendarLogo";
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

      <View style={styles.header1}>
        <Text style={styles.smallText}>Dosage:</Text>   
        <Text style={styles.textStyle}>1 Bowl</Text>
        <Text style={styles.smallText}>Onset of Effect (Time from Intake):</Text>   
        <Text style={styles.textStyle}>0 hours, 5 minutes</Text>
        <Text style={styles.smallText}>Duration of Effect:</Text>   
        <Text style={styles.textStyle}>2 hours, 30 minutes</Text>
      </View>

      <View style={styles.line}>
        <LineLogo/>
      </View>

      <Text style={styles.smallText}>Overall Mood</Text>   
      <Text style={styles.textStyle}>a</Text>
      <Text style={styles.smallText}>Mood Words</Text>   
      <Text style={styles.textStyle}>Uplifted, Relaxed, Happy</Text>
      <Text style={styles.smallText}>Positive Effects</Text>   
      <Text style={styles.textStyle}>Muscle Relief, Relaxation, Pain Relief</Text>
      <Text style={styles.smallText}>Negative Effects</Text>   
      <Text style={styles.textStyle}>Dry Eyes, Dry Mouth</Text>

      <FontAwesome5 style={styles.asd} name={'calendar-alt'}/>
      <Text style={styles.smallText}>Overall Mood</Text>
      <FontAwesome5 style={styles.mood}name={'sad-tear'} />
      <FontAwesome5 style={styles.mood}name={'frown'} />
      <FontAwesome5 style={styles.mood}name={'meh'} />
      <FontAwesome5 style={styles.mood}name={'smile'} />
      <FontAwesome5 style={styles.mood}name={'laugh'} />
      <FontAwesome5 style={styles.mood}name={'laugh-squint'} />
      {/*
      
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
    marginTop: 5,
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
  header1: {
    marginTop: 40,
  },
  smallText: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginLeft: 30,
    marginTop: 5,
  },
  textStyle: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
    marginLeft: 30,
  },
  line: {
    marginTop: 10,
    height: 10,
    alignItems: "center",
  },
  asd: {
    // position: "absolute",
    // left: 50,
    // top: 170,
    fontSize: 50,
    color: "#183A1D"
  },
  mood: {
    fontSize: 50,
    color: "#183A1D"
  },
  // calendar: {
  //   position: "absolute",
  //   left: 50,
  //   top: 170,
  //   fontSize: 30,
  //   color: "#183A1D"

  // },
  // mood: {
  //   position: "absolute",
  //   width: 319,
  //   height: 116,
  //   left: 25,
  //   top: 385,

  //   fontFamily: "Karla",
  //   fontStyle: "normal",
  //   fontWeight: "normal",
  //   fontSize: 13,
  //   lineHeight: 15,

  //   color: "#183A1D",
  // },
  // mood1: {
  //   position: "absolute",
  //   left: 25,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#183A1D"
  // },
  // mood2: {
  //   position: "absolute",
  //   left: 55,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#183A1D"
  // },
  // mood3: {
  //   position: "absolute",
  //   left: 85,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#183A1D"
  // },
  // mood4: {
  //   position: "absolute",
  //   left: 115,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#183A1D"
  // },
  // mood5: {
  //   position: "absolute",
  //   left: 145,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#183A1D"
  // },
  // mood6: {
  //   position: "absolute",
  //   left: 175,
  //   top: 400,
  //   fontSize: 25,
  //   color: "#F6C453"
  // },

});
