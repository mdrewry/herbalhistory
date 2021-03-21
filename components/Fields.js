import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";

export const TextField = ({
  label,
  disabled,
  secureTextEntry,
  value,
  setValue,
}) => {
  const theme = {
    ...DefaultTheme,
    roundness: 50,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183A1D",
      secondary: "#F1B779",
      accent: "#F6C453",
      background: "#FEFBE9",
      text: "#183A1D",
      surface: "#3f37c9",
    },
  };
  return (
    <View style={styles.textFieldWrapper}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        theme={theme}
        mode="outlined"
        disabled={disabled}
        style={styles.textField}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFieldWrapper: {
    textAlign: "left",
    width: "100%",
  },
  textField: {
    width: "100%",
    fontSize: 15,
  },
  text: {
    color: "#183A1D",
    fontSize: 15,
    fontFamily: "Karla_400Regular",
  },
});
