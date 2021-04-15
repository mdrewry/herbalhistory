import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AddSession({
  highlightText,
  page,
  currPage,
  children,
}) {
  const regText = "Let's get some information about the ";
  if (currPage !== page.pageNum || !page.enabled) return <></>;
  return (
    <>
      <Text style={styles.regText}>
        {regText}
        <Text style={styles.highlightText}>{highlightText}</Text>
      </Text>
      <View style={styles.container}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    width: "90%",
    alignSelf: "center",
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
