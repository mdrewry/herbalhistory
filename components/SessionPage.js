import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
export default function AddSession({
  highlightText,
  page,
  currPage,
  children,
}) {
  const regText = "Let's get some information about the ";
  if (currPage !== page) return <></>;
  return (
    <>
      <Text style={styles.regText}>
        {regText}
        <Text style={styles.highlightText}>{highlightText}</Text>
      </Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.stretchOpen}>
          <View style={styles.stretch} />
        </View>
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    width: "90%",
  },
  stretchOpen: {
    flexDirection: "row",
    width: "100%",
  },
  stretch: {
    flexGrow: 1,
  },
  regText: {
    fontFamily: "Karla_700Bold",
    color: "#F1B779",
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  highlightText: {
    fontFamily: "Karla_700Bold",
    color: "#183A1D",
    fontSize: 20,
  },
});
