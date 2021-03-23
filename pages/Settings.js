import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Page from "../components/Page";
import { ContainedButton } from "../components/Buttons";
import DashLogo from "../res/DashLogo";
import ScrollPage from "../components/ScrollPage";
import { auth } from "../firebase";
export default function Settings({}) {
  const handleSignOut = async () => {
    auth.signOut();
  };
  const [sectionText, setSectionText] = useState("Custom Sections:");
  const [moreText, setMoreText] = useState("More Settings and Features Coming Soon!");
  const [headerText, setHeaderText] = useState("Settings");
  const [descText, setDescText] = useState("Choose what custom areas of focus you would like to add to your session entries.");
  const [field1Text, setField1Text] = useState("Sleep");
  const [field2Text, setField2Text] = useState("Anxiety");
  const [isSleepSwitchOn, setIsSleepSwitchOn] = React.useState(false);
  const [isAnxietySwitchOn, setIsAnxietySwitchOn] = React.useState(false);
  const onToggleSleepSwitch = () => setIsSleepSwitchOn(!isSleepSwitchOn);
  const onToggleAnxietySwitch = () => setIsAnxietySwitchOn(!isAnxietySwitchOn);
  return (
    <ScrollPage>
      <View style={styles.logo}>
        <DashLogo />
      </View>
      <Text style={styles.headerText}>{headerText}</Text>
      <Text style={styles.sectionText}>{sectionText}</Text>
      <Text style={styles.descText}>{descText}</Text>
      <View style={styles.fields}>
        <Text style={styles.fieldText}>{field1Text}</Text>
        <Switch value={isSleepSwitchOn} onValueChange={onToggleSleepSwitch} />
        <Text style={styles.fieldText}>{field2Text}</Text>
        <Switch value={isAnxietySwitchOn} onValueChange={onToggleAnxietySwitch} />
      </View>
      <Text style={styles.moreText}>{moreText}</Text>
      <View style={styles.signOut}>
        <ContainedButton handlePress={handleSignOut} text="Sign Out" />
      </View>
    </ScrollPage>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    width: 110,
    height: 106.16,
  },
  sectionText: {
    fontSize: 30,
    fontFamily: "Karla_700Bold",
    marginLeft: 30,
    color: "#183A1D"
  },
  descText: {
    fontSize: 18,
    fontFamily: "Karla_400Regular",
    marginLeft: 30,
    color: "#183A1D"
  },
  moreText: {
    color: "#F1B779",
    fontSize: 30,
    fontFamily: "Karla_700Bold",
    margin: 30,
  },
  headerText: {
    color: "#183A1D",
    fontSize: 40,
    fontFamily: "Sansita_700Bold",
    margin: 30
  },
  fields: {
    margin: 30
  },
  fieldText: {
    fontSize: 25,
    fontFamily: "Karla_400Regular",
    color: "#183A1D"
  },
  signOut: {
    margin: 38,
    width: "80%",
    alignItems: "center"
  }
});
