import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { firestore, auth } from "./firebase";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import History from "./pages/History";
import AddSession from "./pages/AddSession";
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
      }
    });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const disableTabBar = ({ route }) => ({
    tabBarVisible: signedIn,
  });
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          {!signedIn ? (
            <>
              <Tab.Screen
                name="Landing"
                options={({ route }) => ({
                  tabBarVisible: signedIn,
                })}
              >
                {(props) => <Landing {...props} setSignedIn={setSignedIn} />}
              </Tab.Screen>
              <Tab.Screen name="Login" options={disableTabBar}>
                {(props) => <Login {...props} setSignedIn={setSignedIn} />}
              </Tab.Screen>
              <Tab.Screen
                name="Signup"
                options={({ route }) => ({
                  tabBarVisible: signedIn,
                })}
              >
                {(props) => <Signup {...props} setSignedIn={setSignedIn} />}
              </Tab.Screen>
            </>
          ) : (
            <>
              <Tab.Screen name="Home">
                {(props) => <Home {...props} />}
              </Tab.Screen>
              <Tab.Screen name="History">
                {(props) => <History {...props} />}
              </Tab.Screen>
              <Tab.Screen name="AddSession">
                {(props) => <AddSession {...props} />}
              </Tab.Screen>
              <Tab.Screen name="Settings">
                {(props) => <Settings {...props} />}
              </Tab.Screen>
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#FEFBE9",
    justifyContent: "center",
    alignItems: "center",
  },
});
