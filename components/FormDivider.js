import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
export default function FormDivider() {
  return <Divider style={styles.spacer} />;
}

const styles = StyleSheet.create({
  spacer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#F1B779",
    height: 2,
  },
});
