import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import { auth } from "../firebase";
export default function Settings({}) {
  const handleSignOut = async () => {
    auth.signOut();
  };
  return (
    <Page>
      <ContainedButton handlePress={handleSignOut} text="Sign Out" />
    </Page>
  );
}

const styles = StyleSheet.create({});
