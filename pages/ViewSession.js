import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScrollPage from "../components/ScrollPage";
import LineLogo from "../res/LineLogo";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function ViewSession({navigation}) {
  return (
    <ScrollPage>
    <View>
      <Text style={styles.month}>MAR</Text>
      <Text style={styles.day}>23</Text>
      <Text style={styles.year}>2021</Text>
      <Text style={styles.time}>3:00 PM</Text>
      <Text style={styles.prodInf}>Product Information</Text>
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
      <Text style={styles.conc2}>Good Product for Sleep<FontAwesome5 name={'check-circle'}/></Text>


      </View>
    </ScrollPage>
  );

}


const styles = StyleSheet.create({
  prodInf: {
    position: "absolute",
    fontFamily: "Karla",
    width: 195,
    height: 23,
    left: 117,
    top: 36,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23,
    display: "flex",
    alignItems: "center",
    color: "#F1B779",
  },
  month: {
    position: "absolute",
    width: 86,
    height: 36,
    left: 23,
    top: 36,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23,
    textAlign: "center",

    color: "#183A1D",
  },
  day: {
    position: "absolute",
    width: 76,
    height: 69,
    left: 30,
    top: 50,

    fontFamily: "Sansita",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 65,
    lineHeight: 78,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#F6C453",
  },
  year: {
    position: "absolute",
    width: 86,
    height: 36,
    left: 25,
    top: 110,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23,
    textAlign: "center",

    color: "#183A1D",
  },
  time: {
    position: "absolute",
    width: 90,
    height: 22,
    left: 23,
    top: 135,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23,
    textAlign: "center",

    color: "#183A1D",
  },
  strain1: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 60,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  strain2: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 75,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  ratio1: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 100,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  ratio2: {
    position: "absolute",
    width: 150,
    height: 36,
    left: 117,
    top: 115,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  type1: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 155,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  type2: {
    position: "absolute",
    width: 200,
    height: 36,
    left: 117,
    top: 170,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  disp1: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 190,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  disp2: {
    position: "absolute",
    width: 200,
    height: 36,
    left: 117,
    top: 205,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  meth1: {
    position: "absolute",
    width: 139,
    height: 36,
    left: 117,
    top: 225,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  meth2: {
    position: "absolute",
    width: 200,
    height: 36,
    left: 117,
    top: 240,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  dose1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 260,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  dose2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 275,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  dose3: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 295,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  dose4: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 310,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  dose5: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 330,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  dose6: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 345,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  line1: {
    position: "absolute",
    height: 0,
    top: 370,
    alignItems: "center",
  },
  calendar: {
    position: "absolute",
    left: 50,
    top: 170,
    fontSize: 30,
    color: "#183A1D"

  },
  mood: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 385,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  mood1: {
    position: "absolute",
    left: 25,
    top: 400,
    fontSize: 25,
    color: "#183A1D"
  },
  mood2: {
    position: "absolute",
    left: 55,
    top: 400,
    fontSize: 25,
    color: "#183A1D"
  },
  mood3: {
    position: "absolute",
    left: 85,
    top: 400,
    fontSize: 25,
    color: "#183A1D"
  },
  mood4: {
    position: "absolute",
    left: 115,
    top: 400,
    fontSize: 25,
    color: "#183A1D"
  },
  mood5: {
    position: "absolute",
    left: 145,
    top: 400,
    fontSize: 25,
    color: "#183A1D"
  },
  mood6: {
    position: "absolute",
    left: 175,
    top: 400,
    fontSize: 25,
    color: "#F6C453"
  },
  words1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 430,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  words2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 445,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  pos1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 465,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  pos2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 480,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  neg1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 500,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  neg2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 515,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  line2: {
    position: "absolute",
    height: 0,
    top: 540,
    alignItems: "center",
  },
  line3: {
    position: "absolute",
    height: 0,
    top: 670,
    alignItems: "center",
  },
  custom1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 560,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#F6C453",
  },
  bef1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 580,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  bef2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 595,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  af1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 615,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  af2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 630,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  conc1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 650,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  custom2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 680,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#F6C453",
  },
  bef3: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 700,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  bef4: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 715,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  af3: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 735,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  af4: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 750,

    fontFamily: "Karla",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 23,

    color: "#183A1D",
  },
  conc2: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top:810,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  desc1: {
    position: "absolute",
    width: 319,
    height: 116,
    left: 25,
    top: 770,

    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  },
  desc2: {
    position: "absolute",
    width: 330,
    height: 50,
    left: 25,
    top: 790,

    borderWidth: 2,
    borderRadius:15,
    borderColor: "#183A1D",
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 15,

    color: "#183A1D",
  }







});
