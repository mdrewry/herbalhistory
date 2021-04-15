import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../../components/Page";
import Header from "../../components/Header";
import { ContainedButton } from "../../components/Buttons";
export default function FormCompleted({ user, handleNavigation }) {
  return (
    <Page>
      <Header
        text1="Session"
        text2="Completed!"
        handleBack={() => handleNavigation("Home")}
      />
      <View style={styles.endPage}>
        <Text style={styles.endPagePrompt}>
          You have successfully completed your{" "}
          <Text style={styles.endPagePromptHighlight}>
            {user.numSessions + 1}st
          </Text>{" "}
          entry.
        </Text>

        <ContainedButton
          handlePress={() => handleNavigation("History")}
          text="View Entry"
        />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  endPage: {
    width: "80%",
  },
  endPagePrompt: {
    fontFamily: "Karla_700Bold",
    color: "#183A1D",
    fontSize: 20,
    marginBottom: 40,
  },
  endPagePromptHighlight: {
    textDecorationLine: "underline",
  },
});
