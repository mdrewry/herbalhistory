import React from "react";
import { StyleSheet, Text, View, ScrollView  } from "react-native";
import ScrollPage from "../components/ScrollPage";
import DashLogo from "../res/DashLogo";
import { auth, firestore, firebase } from "../firebase";
export default function Home() {
  return (
    <ScrollPage>
      <View style={styles.logo}>
        <DashLogo />
      </View>
      <Text style={styles.headerText}>Welcome Back,          </Text>
      {/* <Text style={styles.name}>Jane!                                  </Text> */}
      <Text style={styles.name}>{auth.currentUser.name} </Text>
      <Text style={styles.textStyle}>It has been</Text>
      
      <View style={styles.timecontainer}>
        <View style={styles.circleCaption}>
          <View style={styles.circle}>
            <Text style={styles.stat}>0</Text>
          </View>
          <Text style={styles.timeText}>days</Text>
        </View>
        <View style={styles.circleCaption}>
          <View style={styles.circle}>
            <Text style={styles.stat}>2</Text>
          </View>
          <Text style={styles.timeText}>hours</Text>
          </View>
      </View>
      
      {/* <Text style={styles.textStyle}>0 days 2 hours</Text> */}
      <Text style={styles.textStyle}>since your last session.</Text>
      
      <Text style={styles.textStyle1}>This week:</Text>
      <ScrollView contentContainer={styles.calendar} 
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={78} //your element width
        snapToAlignment={"center"}>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
        <View style={styles.dateBox}>
              <Text style={styles.textStyle}>SUN</Text>
              <Text style={styles.textStyle}>FEB</Text>
              <Text style={styles.textStyle}>21</Text>
              <Text style={styles.textStyle}>2021</Text>
        </View>
      </ScrollView>

    </ScrollPage>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    width: 110,
    height: 110,
    marginLeft: -290,
  },
  headerText: {
    color: "#183A1D",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
  },
  name: {
    color: "#F6C453",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
  },
  textStyle: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
  },
  textStyle1: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Bold",
    // textAlign: "left",
    alignItems: "flex-start", //not working
  },
  timeText: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_700Regular",
    textAlign: "center",
  },
  stat: {
    color: "#183A1D",
    fontSize: 30,
    fontFamily: "Karla_700Bold",
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
  dateBox: {
    backgroundColor: "#E1EEDD",
    width: 78,
    height: 130,
    borderRadius: 20,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  timecontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circleCaption: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  calendar: {
    flexDirection: "row",
    // justifyContent: "space-around",
    // justifyContent: "space-between",
    // justifyContent: "space-evenly",
    // flexGrow: 1,
    // flex: 1,
  }
});
