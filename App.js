import React, { useState, useEffect } from "react";
import { LogBox, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import _ from "lodash";
import { firestore, auth } from "./firebase";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Calendar from "./pages/History/Calendar";
import AddSession from "./pages/AddSession/AddSession";
import Settings from "./pages/Settings";
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
const MaterialTab = createMaterialBottomTabNavigator();
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
    surface: "#FEFBE9",
  },
};

export default function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [barDisabled, setBarDisabled] = useState(false);
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
        {!signedIn ? (
          <Tab.Navigator>
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
          </Tab.Navigator>
        ) : (
          <MaterialTab.Navigator
            activeColor="#F6C453"
            inactiveColor="#183A1D"
            barStyle={{
              ...styles.bottomNavBar,
              display: barDisabled ? "none" : "flex",
            }}
            tabBarOptions={{
              keyboardHidesTabBar: true,
            }}
            screenOptions={({ route }) => ({
              tabBarButton: ["ViewSession"].includes(route.name)
                ? () => {
                    return null;
                  }
                : undefined,
            })}
          >
            <MaterialTab.Screen
              name="Home"
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
            >
              {(props) => <Home {...props} user={user} />}
            </MaterialTab.Screen>
            <MaterialTab.Screen
              name="History"
              options={{
                tabBarLabel: "History",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="book-multiple"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
              {(props) => <Calendar {...props} user={user} />}
            </MaterialTab.Screen>
            <MaterialTab.Screen
              name="New Session"
              options={{
                tabBarLabel: "New Session",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="plus" color={color} size={26} />
                ),
              }}
            >
              {(props) => (
                <AddSession
                  {...props}
                  user={user}
                  setBarDisabled={setBarDisabled}
                />
              )}
            </MaterialTab.Screen>
            <MaterialTab.Screen
              name="Settings"
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
              }}
            >
              {(props) => (
                <Settings {...props} user={user} setSignedIn={setSignedIn} />
              )}
            </MaterialTab.Screen>
          </MaterialTab.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    backgroundColor: "#E1EEDD",
  },
  tab: {},
});
