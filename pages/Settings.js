import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContainedButton } from "../components/Buttons";
import { CustomSwitch } from "../components/CustomSwitch";
import DashLogo from "../res/DashLogo";
import ScrollPage from "../components/ScrollPage";
import { auth, firestore } from "../firebase";
export default function Settings({ user, setSignedIn }) {
  const handleScript = async () => {
    const snapshot = await firestore.collection("users").get();
    await Promise.all(
      snapshot.docs.map(async (doc) => {
        await doc.ref.update({
          trackingPreference: {
            method: true,
            strain: true,
            cannabisFamily: true,
            thcCbdValue: true,
            dosage: true,
            duration: true,
            onset: true,
            dispensary: true,
            moodWords: true,
            negativeWords: true,
            positiveWords: true,
            overallMood: true,
            overallRating: true,
            wouldTryAgain: true,
            notes: true,
            sleep: true,
            anxiety: true,
          },
        });
      })
    );
  };
  const handleSignOut = async () => {
    setSignedIn(false);
    auth.signOut();
  };
  const trackingPreference = user.trackingPreference;
  const toggleFields = [
    {
      label: "Smoking Method",
      varName: "method",
      value: trackingPreference.method,
    },
    {
      label: "Strain",
      varName: "strain",
      value: trackingPreference.strain,
    },
    {
      label: "Cannabis Family",
      varName: "cannabisFamily",
      value: trackingPreference.cannabisFamily,
    },
    {
      label: "THC/CBD Amount",
      varName: "thcCbdValue",
      value: trackingPreference.thcCbdValue,
    },
    {
      label: "Dosage",
      varName: "dosage",
      value: trackingPreference.dosage,
    },
    {
      label: "Session Duration",
      varName: "duration",
      value: trackingPreference.duration,
    },
    {
      label: "Session Onset",
      varName: "onset",
      value: trackingPreference.onset,
    },
    {
      label: "Dispensary",
      varName: "dispensary",
      value: trackingPreference.dispensary,
    },
    {
      label: "Mood Words",
      varName: "moodWords",
      value: trackingPreference.moodWords,
    },
    {
      label: "Negative Words",
      varName: "negativeWords",
      value: trackingPreference.negativeWords,
    },
    {
      label: "Positive Words",
      varName: "positiveWords",
      value: trackingPreference.positiveWords,
    },
    {
      label: "Overall Mood",
      varName: "overallMood",
      value: trackingPreference.overallMood,
    },
    {
      label: "Overall Rating",
      varName: "overallRating",
      value: trackingPreference.overallRating,
    },
    {
      label: "Would Try Again",
      varName: "wouldTryAgain",
      value: trackingPreference.wouldTryAgain,
    },
    {
      label: "Notes",
      varName: "notes",
      value: trackingPreference.notes,
    },
    {
      label: "Sleep Tracking",
      varName: "sleep",
      value: trackingPreference.sleep,
    },
    {
      label: "Anxiety Tracking",
      varName: "anxiety",
      value: trackingPreference.anxiety,
    },
  ];
  const toggleSwitch = async (fieldSelected) => {
    let updatedTrackingPreferences = { ...user.trackingPreference };
    updatedTrackingPreferences[fieldSelected] = !updatedTrackingPreferences[
      fieldSelected
    ];
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
          <View style={styles.rowCenter} key={index}>
            <Text style={styles.fieldText}>{field.label}</Text>
            <View style={styles.grow} />
            <CustomSwitch
              value={field.value}
              handleToggle={() => toggleSwitch(field.varName)}
            />
          </View>
        ))}
      </View>
      <Text style={styles.moreText}>
        More Settings and Features Coming Soon!
      </Text>
      {/* <View style={styles.signOut}>
        <ContainedButton handlePress={handleScript} text="Run Script" />
      </View> */}
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
    color: "#183A1D",
  },
  descText: {
    fontSize: 18,
    fontFamily: "Karla_400Regular",
    marginLeft: 30,
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
    margin: 30,
  },
  fieldText: {
    fontSize: 25,
    fontFamily: "Karla_400Regular",
    color: "#183A1D",
  },
  signOut: {
    margin: 38,
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
});
