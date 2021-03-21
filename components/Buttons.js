import React from "react";
import { StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
export const ContainedButton = ({ handlePress, text }) => {
  return (
    <Button style={styles.button} mode="contained" onPress={handlePress}>
      {text}
    </Button>
  );
};
export const TextButton = ({ handlePress, text, style }) => {
  return (
    <Button
      style={{ ...style, ...styles.button }}
      mode="text"
      onPress={handlePress}
    >
      {text}
    </Button>
  );
};
export const BackButton = ({ handlePress }) => {
  return (
    <IconButton
      style={styles.backButton}
      size={80}
      icon="chevron-left"
      onPress={handlePress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
    fontFamily: "Karla_700Bold",
  },
  backButton: {
    margin: -20,
  },
});
