import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import { TextField } from "../components/Fields";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { auth } from "../firebase";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState("");
  const handlePasswordReset = async () => {
    await auth.sendPasswordResetEmail(email);
    setResponseText(
      "If there is an account associated with this email, password reset instructions will be sent to your email."
    );
  };
  const handleBack = () => {
    navigation.navigate("Login");
    setResponseText("");
  };
  return (
    <Page>
      <Header text1="Forgot" text2="Password?" handleBack={handleBack} />
      <View style={styles.content}>
        <TextField label="Email" value={email} setValue={setEmail} />
        <View style={styles.spacer} />
        <ContainedButton handlePress={handlePasswordReset} text="Send Email" />
        <View style={styles.spacer} />
        <View style={styles.spaceHolder}>
          <Text style={styles.responseText}>{responseText}</Text>
        </View>
      </View>
      <View style={styles.fill} />
      <Footer
        text="Log In Instead"
        type="link"
        route="Login"
        navigation={navigation}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  spaceHolder: {
    minHeight: 20,
    width: "100%",
    textAlign: "left",
  },
  spacer: {
    height: 20,
  },
  fill: {
    flexGrow: 1,
  },

  resposneText: {
    color: "#183A1D",
    fontSize: 15,
    fontFamily: "Karla_400Regular",
  },
  content: {
    width: "80%",
    alignItems: "center",
    height: "60%",
  },
});
