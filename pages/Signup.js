import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import { TextField } from "../components/Fields";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { auth, firestore } from "../firebase";
export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const handleSignup = async () => {
    if (password !== confirmPassword) setErrorText("Passwords must match");
    else if (name === "") setErrorText("Please enter a name");
    else {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
          const { user } = response;
          await firestore
            .collection("users")
            .doc(user.uid)
            .set({
              name: name,
              email: email,
              numSessions: 0,
              trackingPreference: {
                method: true,
                strain: true,
                cannabisFamily: true,
                thcCbdValue: true,
                dosage: true,
                duration: true,
                onset: true,
                dispensary: true,
                moodWords: true,
                negativeWords: true,
                positiveWords: true,
                overallMood: true,
                overallRating: true,
                wouldTryAgain: true,
                notes: true,
                sleep: false,
                anxiety: false,
              },
            });
        })
        .catch((error) => {
          setErrorText(error.message);
        });
      await auth.signInWithEmailAndPassword(email, password);
    }
  };
  const handleBack = () => {
    navigation.navigate("Landing");
    setErrorText("");
  };
  return (
    <Page>
      <Header text1="Create an" text2="Account" handleBack={handleBack} />
      <View style={styles.content}>
        <TextField label="Name" value={name} setValue={setName} />
        <View style={styles.spacer} />
        <TextField label="Email" value={email} setValue={setEmail} />
        <View style={styles.spacer} />
        <TextField
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.spacer} />
        <TextField
          label="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />
        <View style={styles.spacer} />
        <View style={styles.spaceHolder}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
        <ContainedButton handlePress={handleSignup} text="Signup" />
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
    height: 50,
  },
  errorText: {
    color: "#ff0033",
    fontSize: 15,
    fontFamily: "Karla_400Regular",
  },
  content: {
    width: "80%",
    alignItems: "center",
    height: "50%",
  },
});
