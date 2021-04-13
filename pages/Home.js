import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ScrollPage from "../components/ScrollPage";
import moment from "moment";
import { firestore } from "../firebase";
import DashLogo from "../res/DashLogo";
import FunFactInfo from "../res/FunFactInfo";
import LineLogo from "../res/LineLogo";
import ScrollLeft from "../res/ScrollLeft";
import ScrollRight from "../res/ScrollRight";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function Home({ user, navigation }) {
  
  const [sessions, setSessions] = useState([]);
  const [lastDate, setlastDate] = useState(moment().format("YYYY-MM-DD"));
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [strain, setStrain] = useState("");
  const [timesUsed, setTimesUsed] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [averageMood, setAverageMood] = useState(0);
  const [commonStrain, setCommonStrain] = useState("");
  const [commonTimesUsed, setCommonTimesUsed] = useState(0);
  const [commonAverageRating, setCommonAverageRating] = useState(0);
  const [commonAverageMood, setCommonAverageMood] = useState(0);
  const [mood, setMood] = useState([]);
  const [positive, setPositive] = useState([]);
  const [negative, setNegative] = useState([]);

  useEffect(() => {
    const sessionsRef = firestore
      .collection("sessions")
      .where("userID", "==", user.id)
      .orderBy("date", "asc");
    const unsubscribeSessions = sessionsRef.onSnapshot((snapshot) => {
      let sessions = {};
      let lastDate = "";
      let strainMap = {};
      let commonMood = [];
      let commonPos = [];
      let commonNeg = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        const dateKey = moment(data.date.toDate()).format("YYYY-MM-DD");
        lastDate = dateKey;
        const strainStr = data.strain;
        const rating = data.overallRating;
        const mood = data.overallMood;
        const moodwords = data.moodWords;
        const positivewords = data.positiveWords;
        const negativewords = data.negativeWords;
        for( i=0;i<moodwords.length;i++)
          commonMood.push(moodwords[i]);
        for( i=0;i<positivewords.length;i++)
          commonPos.push(positivewords[i]);
        for( i=0;i<negativewords.length;i++)
          commonNeg.push(negativewords[i]);
        if(strainMap[strainStr] !== undefined){
          const f = strainMap[strainStr]["freq"] + 1;
          const ratingRunningAvg = (strainMap[strainStr]["rating"] + (rating - strainMap[strainStr]["rating"]) / f);
          const r = Math.round(ratingRunningAvg * 100) / 100;
          const moodRunningAvg = (strainMap[strainStr]["mood"] + (mood - strainMap[strainStr]["mood"]) / f);
          strainMap[strainStr] = {"freq":f,"rating":r,"mood":Math.round(moodRunningAvg)};
        }
        else
          strainMap[strainStr] = {"freq":1,"rating":rating,"mood":mood};
        if (sessions[dateKey] === undefined) 
          sessions[dateKey] = [];
        sessions[dateKey].push({ ...data, id });
      });
      setSessions(sessions);
      setlastDate(lastDate); 
      setDateTime(sessions, lastDate);
      console.log(strainMap)
      favoriteStrain(strainMap);
      mostCommonStrain(strainMap);
      setMood(common(commonMood))
      setPositive(common(commonPos))
      setNegative(common(commonNeg))
    });
    return () => {
      unsubscribeSessions();
    };
  }, []);
  const date = [1, 2, 3, 4, 5, 6, 7];
  const funFact = [
    "Cannabis has been legal for personal use in Alaska since 1975.",
    "George Washington grew cannabis at Mount Vernon.",
    "In 1996, California became the first state to legalize medical cannabis.",
    "William Shakespeare grew and smoke marijuana.",
    "Women build up a tolerance to cannabis faster than men.",
    "In 2013, Uruguay became the first country to fully legalize cannabis use.",
    "In 2012, Washington and Colorado became the first states to legalize cannabis for recreational use.",
  ];
  const randNum = Math.floor(Math.random() * 7) + 0;
  const moodArr = ["sad-tear","frown","meh","smile","laugh","grin-beam"];

  const handleNewSession = () => {
    navigation.navigate("New Session");
  };

  const setDateTime = (sessions, dateKey) => {
    // console.log(sessions)
    const currDay = moment().format("YYYY-MM-DD hh:mm");
    const lastDateHours = moment(sessions[dateKey][sessions[dateKey].length - 1].date.toDate()).format("YYYY-MM-DD hh:mm");
    setDay(moment(currDay).diff(moment(lastDateHours), 'days'));
    setHours(moment(currDay).diff(moment(lastDateHours), 'hours') % 24);
  };

  const favoriteStrain = (strainMap) => {
    var highest = 0;
    var strainStr = "None";
    for (let key in strainMap){
      if(highest < strainMap[key]["rating"]){
        highest = strainMap[key]["rating"];
        strainStr = key;
      }
    }
    setStrain(strainStr);
    setTimesUsed(strainMap[strainStr]["freq"]);
    setAverageRating(highest);
    setAverageMood(strainMap[strainStr]["mood"])
  };

  const mostCommonStrain = (strainMap) => {
    var highest = 0;
    var strainStr = "None";
    for (let key in strainMap){
      if(highest < strainMap[key]["freq"]){
        highest = strainMap[key]["freq"];
        strainStr = key;
      }
    }
    setCommonStrain(strainStr);
    setCommonTimesUsed(highest);
    setCommonAverageRating(strainMap[strainStr]["rating"]);
    setCommonAverageMood(strainMap[strainStr]["mood"]);
  }

  const common = (arr) => {
    let commonArr = [];
    commonArr.push(mostFreq(arr))
    const second = arr.filter(function(x){
      return x !== mostFreq(arr);
    });
    console.log()
    if(second.length !== 0)
    commonArr.push(mostFreq(second))
    const third = second.filter(function(x){
      return x !== mostFreq(second);
    });
    if(third.length !== 0)
      commonArr.push(mostFreq(third))
    return commonArr;
  }

  const mostFreq = (arr) => {
    var modeMap = {};
    var max = arr[0]
    var count = 1;
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        if(modeMap[temp] == null)
          modeMap[temp] = 1;
        else
          modeMap[temp]++;  
        if(modeMap[temp] > count){
          max = temp;
          count = modeMap[temp];
        }
    }
    return max;
  }

  return (
    <ScrollPage>
      <View style={styles.logo}>
        <DashLogo />
      </View>
      <Text style={styles.headerText}>Welcome Back,</Text>
      <Text style={styles.name}>{user.name + "!"} </Text>

      <View style={styles.timestat}>
        <Text style={styles.textStyle}>It has been</Text>
        <View style={styles.timecontainer}>
          <View style={styles.circleCaption}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{day}</Text>
            </View>
            <Text style={styles.timeText}>days</Text>
          </View>
          <View style={styles.circleCaption}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{hours}</Text>
            </View>
            <Text style={styles.timeText}>hours</Text>
          </View>
        </View>
        <Text style={styles.textStyle}>since your last session.</Text>
      </View>

      <Text style={styles.textStyle1}>This week:</Text>
      <View style={styles.calendarWrapper}>
        <ScrollView contentContainerStyle={styles.calendar} horizontal={true}>
          {date.map((i) => {
            return (
              <View key={i.toString()} style={styles.dateBox}>
                <Text style={styles.textStyle}>SUN</Text>
                <Text style={styles.textStyle}>FEB</Text>
                <Text style={styles.textStyle}>{i}</Text>
                <Text style={styles.textStyle}>2021</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.leftArrow}>
          <ScrollLeft />
        </View>
        <View style={styles.rightArrow}>
          <ScrollRight />
        </View>
      </View>

      <View style={styles.fill1}></View>
      <Text style={styles.textStyle1}>Fun Fact of the Day:</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.infologo}>
          <FunFactInfo />
        </View>
        {randNum !== 6 ? (
            <View style={styles.fact}>
              <Text style={styles.funFact}>{funFact[randNum]}</Text>
            </View>
          ) : (
            <Text style={styles.funFact}>{funFact[randNum]}</Text>
          )
        }
      </View>

      <Text style={styles.name}>{user.name + "'s"} </Text>
      <Text style={styles.headerText}>Statistics</Text>
      <View style={styles.fill}></View>
      <Text style={styles.smallText}>
        Favorite Strain (Highest Avg. Rating):
      </Text>
      <Text style={styles.textStyle1}>{strain}</Text>

      <View style={{ alignItems: "center" }}>
        <View style={styles.favStrain}>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{timesUsed}</Text>
            </View>
          </View>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{averageRating}</Text>
            </View>
          </View>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <FontAwesome5 style={styles.mood} name={moodArr[averageMood]} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>times used</Text>
          </View>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>average rating</Text>
            <Text style={styles.smallText1}>(out of 5)</Text>
          </View>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>average mood</Text>
          </View>
        </View>
      </View>

      <View style={styles.line}>
        <LineLogo />
      </View>

      <Text style={styles.smallText}>
        Most Commonly Used Strain:
      </Text>
      <Text style={styles.textStyle1}>{commonStrain}</Text>

      <View style={{ alignItems: "center" }}>
        <View style={styles.favStrain}>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{commonTimesUsed}</Text>
            </View>
          </View>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <Text style={styles.circleNum}>{commonAverageRating}</Text>
            </View>
          </View>
          <View style={styles.circleCaption2}>
            <View style={styles.circle}>
              <FontAwesome5 style={styles.mood} name={moodArr[commonAverageMood]} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>times used</Text>
          </View>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>average rating</Text>
            <Text style={styles.smallText1}>(out of 5)</Text>
          </View>
          <View style={styles.circleCaption2}>
            <Text style={styles.smallText1}>average mood</Text>
          </View>
        </View>
      </View>

      <View style={styles.line}>
        <LineLogo />
      </View>

      <Text style={styles.smallText}>
        {user.name + "'s Common Mood Words:"}
      </Text>
      <Text style={styles.textStyle1}>{mood.join(", ")}</Text>
      <Text style={styles.smallText}>
        {user.name + "'s Common Positive Effects:"}
      </Text>
      <Text style={styles.textStyle1}>{positive.join(", ")}</Text>
      <Text style={styles.smallText}>
        {user.name + "'s Common Negative Effects:"}
      </Text>
      <Text style={styles.textStyle1}>{negative.join(", ")}</Text>

      <View style={styles.fill1}></View>
      <View style={styles.circleCaption3}>
        <TouchableOpacity onPress={handleNewSession} style={styles.circle}>
          <Text style={styles.circleNum}>+</Text>
        </TouchableOpacity>
        <View style={styles.fill1}></View>
        <Text style={styles.textStyle}>Add New Session</Text>
      </View>
      <View style={styles.fill1}></View>
    </ScrollPage>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    width: 110,
    height: 106.16,
  },
  leftArrow: {
    marginLeft: 20,
  },
  rightArrow: {
    marginLeft: 355,
  },
  infologo: {
    marginTop: 8,
    width: 40,
    height: 40,
    marginLeft: 30,
  },
  line: {
    marginTop: 20,
    height: 10,
    alignItems: "center",
  },
  headerText: {
    color: "#183A1D",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
    marginLeft: 30,
  },
  name: {
    color: "#F6C453",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
    marginLeft: 30,
  },
  timestat: {
    alignItems: "center",
    marginBottom: 10,
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
    marginLeft: 30,
  },
  funFact: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginRight: 130,
    marginBottom: 30,
  },
  fill: {
    marginBottom: 5,
  },
  fill1: {
    marginBottom: 10,
  },
  smallText: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    marginLeft: 30,
    marginTop: 5,
  },
  smallText1: {
    color: "#183A1D",
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    textAlign: "center",
  },
  timeText: {
    color: "#183A1D",
    fontSize: 20,
    fontFamily: "Karla_400Regular",
    textAlign: "center",
  },
  circleNum: {
    color: "#183A1D",
    fontSize: 30,
    fontFamily: "Karla_700Bold",
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
  dateBox: {
    backgroundColor: "#E1EEDD",
    width: 78,
    height: 130,
    borderRadius: 20,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    marginRight: 8,
  },
  timecontainer: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
  },
  circleCaption: {
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30,
  },
  circleCaption2: {
    flexDirection: "column",
    alignItems: "center",
    width: "33.33%",
  },
  circleCaption3: {
    flexDirection: "column",
    alignItems: "center",
  },
  calendar: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
  calendarWrapper: {
    width: "90%",
    alignSelf: "center",
  },
  favStrain: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  mood: {
    fontSize: 30,
    color: "#183A1D",
  },
  fact: {
    marginTop: 10,
  },
});
