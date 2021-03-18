import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { firestore, auth } from "./firebase";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import AddSession from "./pages/AddSession";
import Settings from "./pages/Settings";

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: "#560bad",
    secondary: "#3a0ca3",
    accent: "#f72585",
    background: "white",
    text: "#FFF",
    surface: "#3f37c9",
  },
};

export default function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
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
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          {!signedIn ? (
            <>
              <Tab.Screen
                name="Login"
                options={({ route }) => ({
                  tabBarVisible: signedIn,
                })}
              >
                {(props) => <Login {...props} setSignedIn={setSignedIn} />}
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
