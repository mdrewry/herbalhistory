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
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const handleLogin = async () => {
    await auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setErrorText(error);
    });
  };
  const handleBack = () => {
    navigation.navigate("Landing");
    setErrorText("");
  };
  return (
    <Page>
      <Header text1="Welcome" text2="Back!" handleBack={handleBack} />
      <View style={styles.content}>
        <TextField label="Email" value={email} setValue={setEmail} />
        <View style={styles.spacer} />
        <TextField
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.spacer} />
        <View style={styles.spaceHolder}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
        <ContainedButton handlePress={handleLogin} text="Login" />
      </View>
      <View style={styles.fill} />
      <Footer
        text="Forgot Password"
        type="link"
        route="ForgotPassword"
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

  errorText: {
    color: "#ff0033",
    fontSize: 15,
    fontFamily: "Karla_400Regular",
  },
  content: {
    width: "80%",
    alignItems: "center",
    height: "60%",
  },
});
