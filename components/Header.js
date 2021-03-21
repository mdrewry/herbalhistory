import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BackButton } from "./Buttons";
import LogoShape from "../res/LogoShape";
export default function Header({ text, handleBack }) {
  return (
    <>
      <View style={styles.logo}>
        <LogoShape />
      </View>
      <View style={styles.header}>
        <View style={styles.backButtonWrapper}>
          <BackButton handlePress={handleBack} />
        </View>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 80,
    width: 150,
    height: 150,
    position: "absolute",
    top: -250,
    left: -120,
  },
  header: {
    width: "80%",
  },
  backButtonWrapper: {
    marginLeft: -20,
    marginTop: 5,
    marginBottom: -20,
  },
  headerText: {
    color: "#FEFBE9",
    fontSize: 45,
    fontFamily: "Sansita_700Bold",
  },
});
