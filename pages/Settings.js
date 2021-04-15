import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContainedButton } from "../components/Buttons";
import { CustomSwitch } from "../components/CustomSwitch";
import { Divider } from "react-native-paper";
import DashLogo from "../res/DashLogo";
import ScrollPage from "../components/ScrollPage";
import { auth, firestore } from "../firebase";
export default function Settings({ user, setSignedIn }) {
  // const handleScript = async () => {
  //   const snapshot = await firestore.collection("users").get();
  //   await Promise.all(
  //     snapshot.docs.map(async (doc) => {
  //       await doc.ref.update({
  //
  //       });
  //     })
  //   );
  // };
  const handleSignOut = async () => {
    setSignedIn(false);
    auth.signOut();
  };
  const trackingPreference = user.trackingPreference;
  const [toggleFields, setToggleFields] = useState([
    {
      label: "Strain",
      varName: "strain",
      value: trackingPreference.strain,
    },
    {
      label: "Dispensary",
      varName: "dispensary",
      value: trackingPreference.dispensary,
    },
    {
      label: "THC/CBD Amount",
      varName: "thcCbdValue",
      value: trackingPreference.thcCbdValue,
    },
    {
      label: "Cannabis Family",
      varName: "cannabisFamily",
      value: trackingPreference.cannabisFamily,
    },
    {
      label: "Smoking Method",
      varName: "method",
      value: trackingPreference.method,
    },
    {
      label: "Dosage",
      varName: "dosage",
      value: trackingPreference.dosage,
    },
    {
      label: "Session Onset",
      varName: "onset",
      value: trackingPreference.onset,
    },
    {
      label: "Session Duration",
      varName: "duration",
      value: trackingPreference.duration,
    },
    {
      label: "Overall Mood",
      varName: "overallMood",
      value: trackingPreference.overallMood,
    },
    {
      label: "Mood Words",
      varName: "moodWords",
      value: trackingPreference.moodWords,
    },
    {
      label: "Positive Words",
      varName: "positiveWords",
      value: trackingPreference.positiveWords,
    },
    {
      label: "Negative Words",
      varName: "negativeWords",
      value: trackingPreference.negativeWords,
    },
    {
      label: "Would Try Again",
      varName: "wouldTryAgain",
      value: trackingPreference.wouldTryAgain,
    },
    {
      label: "Overall Rating",
      varName: "overallRating",
      value: trackingPreference.overallRating,
    },
    {
      label: "Notes",
      varName: "notes",
      value: trackingPreference.notes,
    },
    {
      label: "Anxiety Tracking",
      varName: "anxiety",
      value: trackingPreference.anxiety,
    },
    {
      label: "Sleep Tracking",
      varName: "sleep",
      value: trackingPreference.sleep,
    },
  ]);
  const toggleSwitch = async (fieldSelected) => {
    setToggleFields(
      toggleFields.map((field) =>
        field.varName === fieldSelected
          ? { ...field, value: !field.value }
          : field
      )
    );
    let updatedTrackingPreferences = { ...user.trackingPreference };
    updatedTrackingPreferences[fieldSelected] = !updatedTrackingPreferences[
      fieldSelected
    ];
    await user.ref.update({ trackingPreference: updatedTrackingPreferences });
  };
  const handleToggleAll = async () => {
    const toggleDirection = !toggleFields[0].value;
    setToggleFields(
      toggleFields.map((field) => ({ ...field, value: toggleDirection }))
    );
    let updatedTrackingPreferences = { ...user.trackingPreference };
    Object.keys(updatedTrackingPreferences).forEach((key) => {
      updatedTrackingPreferences[key] = toggleDirection;
    });
    await user.ref.update({ trackingPreference: updatedTrackingPreferences });
  };
  return (
    <ScrollPage>
      <View style={styles.logo}>
        <DashLogo />
      </View>
      <Text style={styles.headerText}>Settings</Text>
      <Text style={styles.sectionText}>Custom Sections:</Text>
      <Text style={styles.descText}>
        Choose what custom areas of focus you would like to add to your session
        entries.
      </Text>
      <View style={styles.fields}>
        {toggleFields.map((field, index) => (
          <View key={index}>
            <View style={styles.field}>
              <Text style={styles.fieldText}>{field.label}</Text>
              <View style={styles.grow} />
              <CustomSwitch
                value={field.value}
                handleToggle={() => toggleSwitch(field.varName)}
              />
            </View>
            <Divider
              style={{
                backgroundColor: field.value ? "#F1B779" : "#FEFBE9",
                height: 2,
              }}
            />
          </View>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <ContainedButton
          handlePress={handleToggleAll}
          text="Toggle All Fields"
        />
      </View>
      <View style={styles.spacer} />
      {/* <View style={styles.signOut}>
        <ContainedButton handlePress={handleScript} text="Run Script" />
      </View> */}
      <View style={styles.spacer} />
      <View style={styles.buttonWrapper}>
        <ContainedButton handlePress={handleSignOut} text="Sign Out" />
      </View>
      <View style={styles.spacer} />
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
    color: "#183A1D",
  },
  descText: {
    fontSize: 18,
    fontFamily: "Karla_400Regular",
    marginLeft: 30,
    marginRight: 30,
    color: "#183A1D",
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
    margin: 30,
  },
  fields: {
    padding: 30,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  fieldText: {
    fontSize: 25,
    fontFamily: "Karla_400Regular",
    color: "#183A1D",
  },
  buttonWrapper: {
    alignSelf: "center",
    width: "80%",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
  },
  spacer: {
    height: 20,
  },
});
