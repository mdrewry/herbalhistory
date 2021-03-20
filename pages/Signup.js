import React from "react";
import { StyleSheet } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
export default function Signup({ setSignedIn }) {
  const handlePress = () => {
    setSignedIn(true);
  };
  return (
    <Page>
      <ContainedButton onPress={handlePress} text="Signup" />
    </Page>
  );
}

const styles = StyleSheet.create({});
