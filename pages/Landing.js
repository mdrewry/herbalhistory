import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import { Surface } from "react-native-paper";
import Logo from "../res/logo.png";
export default function Landing({ setSignedIn, navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <Page>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.content}>
        <Text style={styles.headerText}>Herbal History</Text>
        <View style={styles.spacer} />
        <View style={styles.actionButtons}>
          <ContainedButton handlePress={handleLogin} text="Login" />
          <View style={styles.spacer} />
          <ContainedButton handlePress={handleSignup} text="Signup" />
        </View>
      </View>
      <View style={styles.fill} />
      <Surface style={styles.footer}>
        <Text style={styles.footerText}>
          An e-journal for the {"\n"}
          wellness-minded, {"\n"}
          goal-setting cannabis user.
        </Text>
      </Surface>
    </Page>
  );
}

const styles = StyleSheet.create({
  spacer: { height: 20 },
  logo: {
    marginTop: 100,
    width: 150,
    height: 150,
  },
  footer: {
    height: 200,
    width: "100%",
    padding: 30,
    backgroundColor: "#E1EEDD",
    alignItems: "center",
  },
  footerText: {
    color: "#183A1D",
    fontSize: 25,
    fontFamily: "Karla_400Regular",
    textAlign: "center",
  },
  fill: {
    flexGrow: 1,
  },
  content: {
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  actionButtons: {
    padding: 30,
    width: "100%",
  },
  headerText: {
    color: "#F6C453",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
  },
});
