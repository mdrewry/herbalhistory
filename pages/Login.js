import React from "react";
import { StyleSheet } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
export default function Login({ setSignedIn }) {
  const handlePress = () => {
    setSignedIn(true);
  };
  return (
    <Page>
      <ContainedButton onPress={handlePress} text="Login" />
    </Page>
  );
}

const styles = StyleSheet.create({});
