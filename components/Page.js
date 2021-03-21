import React from "react";
import { StyleSheet, View } from "react-native";
export default function Page({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#FEFBE9",
    alignItems: "center",
  },
});
