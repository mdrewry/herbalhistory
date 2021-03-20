import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
export const ContainedButton = ({ handlePress, text }) => {
  return (
    <Button style={styles.button} mode="contained" onPress={handlePress}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
    fontFamily: "Karla_700Bold",
  },
});
