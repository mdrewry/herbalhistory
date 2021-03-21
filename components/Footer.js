import React from "react";
import { StyleSheet, Text } from "react-native";
import { Surface } from "react-native-paper";
import { TextButton } from "../components/Buttons";
export default function Footer({ text, type, navigation, route, isLanding }) {
  const handleNavigation = () => {
    navigation.navigate(route);
  };
  return (
    <Surface style={{ ...styles.footer, height: isLanding ? "20%" : "10%" }}>
      {type === "link" ? (
        <TextButton
          style={styles.footerLinkText}
          text={text}
          handlePress={handleNavigation}
        />
      ) : (
        <Text style={styles.footerText}>{text}</Text>
      )}
    </Surface>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    padding: 10,
    paddingBottom: 20,
    backgroundColor: "#E1EEDD",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#183A1D",
    fontSize: 25,
    fontFamily: "Karla_400Regular",
    textAlign: "center",
  },
  footerLinkText: {
    color: "#183A1D",
    fontSize: 25,
    fontFamily: "Karla_700Bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
