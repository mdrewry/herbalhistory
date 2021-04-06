import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, IconButton, TouchableRipple } from "react-native-paper";
export const ContainedButton = ({ handlePress, text }) => {
  return (
    <Button style={styles.button} mode="contained" onPress={handlePress}>
      {text}
    </Button>
  );
};
export const FormNavButton = ({ handlePress, text, disabled }) => {
  return (
    <Button
      style={styles.formNavButton}
      mode="contained"
      onPress={handlePress}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
export const TextButton = ({ handlePress, text, buttonStyle, textStyle }) => {
  return (
    <Button
      style={{ ...styles.button, ...buttonStyle }}
      labelStyle={{ ...styles.buttonText, ...textStyle }}
      mode="text"
      onPress={handlePress}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </Button>
  );
};
export const CustomTextLeftButton = ({ handlePress, text, textStyle }) => {
  return (
    <TouchableRipple
      onPress={handlePress}
      borderless={true}
      style={styles.customRippleButton}
      rippleColor="rgba(24, 58, 29, .32)"
    >
      <Text
        style={{
          ...textStyle,
          ...styles.buttonText,
        }}
      >
        {text}
      </Text>
    </TouchableRipple>
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

export const MoodButton = ({ handlePress, icon, color }) => {
  return (
    <IconButton
      style={styles.backButton}
      size={30}
      icon={icon}
      color={color}
      onPress={handlePress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
  },
  buttonText: {
    fontFamily: "Karla_700Bold",
    fontSize: 20,
  },
  backButton: {
    margin: -20,
  },
  formNavButton: {
    fontSize: 13,
    fontFamily: "Karla_400Regular",
  },
  customRippleButton: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    padding: 20,
    borderRadius: 50,
  },
});
