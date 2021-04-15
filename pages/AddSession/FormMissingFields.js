import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../../components/Page";
import Header from "../../components/Header";
import { ContainedButton } from "../../components/Buttons";
export default function FormCompleted({ handleNavigation }) {
  return (
    <Page>
      <Header text1="Enable" text2="Fields!" handleBack={handleNavigation} />
      <View style={styles.endPage}>
        <Text style={styles.endPagePrompt}>
          Enable at least one field to record a session.
        </Text>
        <ContainedButton
          handlePress={() => handleNavigation("Settings")}
          text="Configure Settings"
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
