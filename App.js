import React, { useState, useEffect } from "react";
import { LogBox, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        });
        return () => unsubscribeUser();
      } else {
        setUser(null);
        setSignedIn(false);
        setLoading(false);
      }
    });
  }, []);

  const hideTabBar = () => ({
    tabBarVisible: false,
  });
  const showTabBar = () => ({
    tabBarVisible: true,
  });

  if (!fontsLoaded || loading) return <AppLoading />;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {!signedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Landing" options={hideTabBar}>
              {(props) => <Landing {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Login" options={hideTabBar}>
              {(props) => <Login {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Signup" options={hideTabBar}>
              {(props) => <Signup {...props} />}
            </Tab.Screen>
            <Tab.Screen name="ForgotPassword" options={hideTabBar}>
              {(props) => <ForgotPassword {...props} />}
            </Tab.Screen>
          </Tab.Navigator>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeBackgroundColor: "#E1EEDD",
              inactiveBackgroundColor: "#E1EEDD",
              activeTintColor: "#F1B779",
              inactiveTintColor: "#183A1D",
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName = "home";
                if (route.name === "History") iconName = "book-multiple";
                else if (route.name === "New Session") iconName = "plus";
                else if (route.name === "Settings") iconName = "cog";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    color={color}
                    size={26}
                  />
                );
              },
            })}
          >
            <Tab.Screen name="Home" options={showTabBar}>
              {(props) => <Home {...props} user={user} />}
            </Tab.Screen>
            <Tab.Screen name="History" options={showTabBar}>
              {(props) => <Calendar {...props} user={user} />}
            </Tab.Screen>
            <Tab.Screen name="New Session" options={hideTabBar}>
              {(props) => <AddSession {...props} user={user} />}
            </Tab.Screen>
            <Tab.Screen name="Settings" options={showTabBar}>
              {(props) => (
                <Settings {...props} user={user} setSignedIn={setSignedIn} />
              )}
            </Tab.Screen>
          </Tab.Navigator>
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
