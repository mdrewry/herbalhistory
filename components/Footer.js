import React from "react";
import { StyleSheet, Text } from "react-native";
import { Surface } from "react-native-paper";
import { TextButton } from "../components/Buttons";
export default function Footer({ text, type, navigation, route }) {
  const handleNavigation = () => {
    navigation.navigate(route);
  };
  return (
    <Surface style={styles.footer}>
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
    height: 150,
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
  footerLinkText: {
    color: "#183A1D",
    fontSize: 25,
    fontFamily: "Karla_700Bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
