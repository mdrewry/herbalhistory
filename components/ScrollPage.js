import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
export default function ScrollPage({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#FEFBE9",
  },
});
