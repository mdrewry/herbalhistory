import React from "react";
import { StyleSheet, Text } from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";
export const ContainedButton = ({ handlePress, text }) => {
  return (
    <TouchableRipple
      onPress={handlePress}
      borderless={true}
      style={styles.customFilledRippleButton}
      rippleColor="rgba(254, 251, 233, .32)"
    >
      <Text style={styles.filledButtonText}>{text}</Text>
    </TouchableRipple>
  );
};
export const FormNavButton = ({ handlePress, text }) => {
  return (
    <TouchableRipple
      onPress={handlePress}
      borderless={true}
      style={styles.formNavButton}
      rippleColor="rgba(254, 251, 233, .32)"
    >
      <Text style={styles.formNavButtonText}>{text}</Text>
    </TouchableRipple>
  );
};
export const TextButton = ({ handlePress, text, buttonStyle, textStyle }) => {
  return (
    <TouchableRipple
      onPress={handlePress}
      borderless={true}
      style={{ ...styles.customRippleButton, ...buttonStyle }}
      rippleColor="rgba(24, 58, 29, .32)"
    >
      <Text style={{ ...styles.buttonText, ...textStyle }}>{text}</Text>
    </TouchableRipple>
  );
};
export const CustomTextLeftButton = ({ handlePress, text, textStyle }) => {
  return (
    <TouchableRipple
      onPress={handlePress}
      borderless={true}
      style={styles.customRippleLeftButton}
      rippleColor="rgba(24, 58, 29, .32)"
    >
      <Text
        style={{
          ...styles.buttonText,
          ...textStyle,
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
    color: "#183A1D",
  },
  backButton: {
    margin: -20,
  },
  formNavButtonText: {
    fontSize: 13,
    fontFamily: "Karla_400Regular",
    color: "#FEFBE9",
  },
  formNavButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#183A1D",
  },
  customRippleButton: {
    width: "100%",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  filledButtonText: {
    fontFamily: "Karla_700Bold",
    fontSize: 20,
    color: "#FEFBE9",
  },
  customFilledRippleButton: {
    width: "100%",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#183A1D",
  },
  customRippleLeftButton: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    padding: 20,
    borderRadius: 50,
  },
});
