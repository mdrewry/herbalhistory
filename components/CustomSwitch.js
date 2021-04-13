import React from "react";
import { StyleSheet, Text } from "react-native";
import { Switch } from "react-native-paper";
export const CustomSwitch = ({ handleToggle, value }) => {
  return <Switch value={value} onValueChange={handleToggle} />;
};

const styles = StyleSheet.create({});
