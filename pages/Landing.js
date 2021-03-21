import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import Logo from "../res/Logo";
import Footer from "../components/Footer";
export default function Landing({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <Page>
      <View style={styles.logo}>
        <Logo />
      </View>
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
      <Footer
        text="An e-journal for the wellness-minded, goal-setting cannabis user."
        isLanding={true}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    width: 150,
    height: 150,
    marginLeft: -20,
  },
  headerText: {
    color: "#F6C453",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
  },
  content: {
    marginTop: 30,
    width: "80%",
    alignItems: "center",
    height: "50%",
  },
  actionButtons: {
    padding: 30,
    width: "100%",
  },
  fill: {
    flexGrow: 1,
  },
  spacer: { height: 20 },
});
