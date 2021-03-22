import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import _ from "lodash";
import { firestore, auth } from "./firebase";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import History from "./pages/History";
import AddSession from "./pages/AddSession";
import Settings from "./pages/Settings";
import HomeIcon from "./res/HomeIcon";
import HistoryIcon from "./res/HistoryIcon";
import AddSessionIcon from "./res/AddSessionIcon";
import SettingsIcon from "./res/SettingsIcon";
import {
  useFonts,
  Sansita_400Regular,
  Sansita_400Regular_Italic,
  Sansita_700Bold,
  Sansita_700Bold_Italic,
  Sansita_800ExtraBold,
  Sansita_800ExtraBold_Italic,
  Sansita_900Black,
  Sansita_900Black_Italic,
} from "@expo-google-fonts/sansita";
import {
  Karla_400Regular,
  Karla_400Regular_Italic,
  Karla_700Bold,
  Karla_700Bold_Italic,
} from "@expo-google-fonts/karla";

LogBox.ignoreAllLogs(true);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 50,
  colors: {
    ...DefaultTheme.colors,
    primary: "#183A1D",
    secondary: "#F1B779",
    accent: "#F6C453",
    background: "#FEFBE9",
    text: "#FEFBE9",
    surface: "#3f37c9",
  },
};

export default function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_400Regular_Italic,
    Karla_700Bold,
    Karla_700Bold_Italic,
    Sansita_400Regular,
    Sansita_400Regular_Italic,
    Sansita_700Bold,
    Sansita_700Bold_Italic,
    Sansita_800ExtraBold,
    Sansita_800ExtraBold_Italic,
    Sansita_900Black,
    Sansita_900Black_Italic,
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const docRef = firestore.collection("users").doc(user.uid);
        const unsubscribeUser = docRef.onSnapshot((snapshot) => {
          const userData = { ...snapshot.data(), id: user.uid };
          setUser({ ...userData, ref: docRef });
          setSignedIn(true);
        });
        return () => unsubscribeUser();
      } else {
        setUser(null);
        setSignedIn(false);
      }
    });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const disableTabBar = () => ({
    tabBarVisible: signedIn,
  });
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return (
                // <Ionicons
                //   name={'ios-information-circle'}
                //   size={size}
                //   color={color}
                // />
                <HomeIcon color={color}/>
              );
            } else if (route.name === 'History') {
              return (
                <HistoryIcon style={{color: "#F1B779"}}/>
              );
            }
            else if (route.name === 'AddSession') {
              return (
                <AddSessionIcon color={color}/>
              );
            }
            else if (route.name === 'Settings') {
              return (
                <SettingsIcon color={color}/>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F1B779',
          inactiveTintColor: '#183A1D',
        }}
        >
          {!signedIn ? (
            <>
              <Tab.Screen name="Landing" options={disableTabBar}>
                {(props) => <Landing {...props} />}
              </Tab.Screen>
              <Tab.Screen name="Login" options={disableTabBar}>
                {(props) => <Login {...props} />}
              </Tab.Screen>
              <Tab.Screen name="Signup" options={disableTabBar}>
                {(props) => <Signup {...props} />}
              </Tab.Screen>
              <Tab.Screen name="ForgotPassword" options={disableTabBar}>
                {(props) => <ForgotPassword {...props} />}
              </Tab.Screen>
            </>
          ) : (
            <>
              <Tab.Screen name="Home">
                {(props) => <Home {...props} user={user} />}
              </Tab.Screen>
              <Tab.Screen name="History">
                {(props) => <History {...props} user={user} />}
              </Tab.Screen>
              <Tab.Screen name="AddSession">
                {(props) => <AddSession {...props} user={user} />}
              </Tab.Screen>
              <Tab.Screen name="Settings">
                {(props) => <Settings {...props} user={user} />}
              </Tab.Screen>
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
