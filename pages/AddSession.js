import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Page from "../components/Page";
import SessionPage from "../components/SessionPage";
import { FormNavButton, ContainedButton } from "../components/Buttons";
import FormDivider from "../components/FormDivider";
import { firestore } from "../firebase";
import {
  TextField,
  MultiLineTextField,
  MultipleSelectionField,
  ButtonSelectionFieldRow,
  ButtonSelectionFieldColumn,
  TwoFieldRow,
  MoodSelectionField,
  RadioButtonSelection,
} from "../components/Fields";
import FormHeader from "../components/FormHeader";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
export default function AddSession({ user, navigation }) {
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(new Date());
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [strainName, setStrainName] = useState("");
  const [thcCbdValue, setThcCbdValue] = useState(["00", "00"]);
  const [thcValueType, setThcValueType] = useState("%");
  const [thcFamily, setThcFamily] = useState("Sativa");
  const [consumptionMethod, setConsumptionMethod] = useState(
    "Inhalation (smoke)"
  );
  const [dosage, setDosage] = useState("");
  const [sessionOnset, setSessionOnset] = useState(["00", "00"]);
  const [sessionDuration, setSessionDuration] = useState(["00", "00"]);
  const [overallMood, setOverallMood] = useState(0);
  const [moodWords, setMoodWords] = useState([]);
  const [positiveWords, setPositiveWords] = useState([]);
  const [negativeWords, setNegativeWords] = useState([]);
  const [overallRating, setOverallRating] = useState(4);
  const [wouldTryAgain, setWouldTryAgain] = useState(true);
  const [notes, setNotes] = useState("");
  const numPages = 6;
  const handleNavigation = () => {
    setPage(0);
    setStrainName("");
    setThcCbdValue(["00", "00"]);
    setThcValueType("%");
    setThcFamily("Sativa");
    setConsumptionMethod("Inhalation (smoke)");
    setDosage("");
    setSessionOnset(["00", "00"]);
    setSessionDuration(["00", "00"]);
    setOverallMood(0);
    setMoodWords([]);
    setPositiveWords([]);
    setNegativeWords([]);
    setOverallRating(4);
    setWouldTryAgain(true);
    setNotes("");
    navigation.navigate("Home");
  };
  const submitForm = async () => {
    await firestore.collection("sessions").add({
      userID: user.id,
      date: date,
      strain: strainName,
      thcValue: thcCbdValue[0],
      cbdValue: thcCbdValue[1],
      chemValueType: thcValueType,
      thcFamily: thcFamily,
      method: consumptionMethod,
      dosage: dosage,
      sessionOnset: sessionOnset,
      sessionDuration: sessionDuration,
      overallMood: overallMood,
      moodWords: moodWords,
      positiveWords: positiveWords,
      negativeWords: negativeWords,
      overallRating: overallRating,
      wouldTryAgain: wouldTryAgain,
      notes: notes,
    });
  };
  const thcFamilySelection = [
    { label: "Indica", value: "Indica" },
    { label: "Sativa", value: "Sativa" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Unknown", value: "Unknown" },
  ];
  const thcValueTypeSelection = [
    { label: "%", value: "%" },
    { label: "mg", value: "mg" },
  ];
  const consumptionMethodSelection = [
    { label: "Inhalation (smoke)", value: "Inhalation (smoke)" },
    { label: "Inhalation (vaporizer)", value: "Inhalation (vaporizer)" },
    { label: "Sublingual", value: "Sublingual" },
    { label: "Topical", value: "Topical" },
    { label: "Edible", value: "Edible" },
  ];
  const moodWordsSelection = [
    { label: "Calm", value: "Calm" },
    { label: "Relaxed", value: "Relaxed" },
    { label: "Uplifted", value: "Uplifted" },
    { label: "Creative", value: "Creative" },
    { label: "Energetic", value: "Energetic" },
    { label: "Happy", value: "Happy" },
    { label: "Euphoric", value: "Euphoric" },
    { label: "Paranoid", value: "Paranoid" },
    { label: "Sad", value: "Sad" },
    { label: "Restless", value: "Restless" },
    { label: "Anxious", value: "Anxious" },
  ];
  const positiveWordsSelection = [
    { label: "Pain Relief", value: "Pain Relief" },
    { label: "Energy", value: "Energy" },
    { label: "Focused", value: "Focused" },
    { label: "Muscle Relief", value: "Muscle Relief" },
    { label: "Intestinal Relief", value: "Intestinal Relief" },
    { label: "Sedative", value: "Sedative" },
    { label: "Anti-Depressant", value: "Anti-Depressant" },
    { label: "Reduced Anxiety", value: "Reduced Anxiety" },
    { label: "Anti-Inflammatory", value: "Anti-Inflammatory" },
    { label: "Increased Appetite", value: "Increased Appetite" },
    { label: "Mood Booster", value: "Mood Booster" },
  ];
  const negativeWordsSelection = [
    { label: "Dry Mouth", value: "Dry Mouth" },
    { label: "Dry Eyes", value: "Dry Eyes" },
    { label: "Dizziness", value: "Dizziness" },
    { label: "Nausea", value: "Nausea" },
    { label: "Drowsy", value: "Drowsy" },
    { label: "Anxiety", value: "Anxiety" },
    { label: "Paranoia", value: "Paranoia" },
    { label: "Headache", value: "Headache" },
    { label: "Couch Lock", value: "Couch Lock" },
  ];
  const wouldTryAgainSelection = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];
  const overallRatingSelection = [
    { label: "Bad", value: 0 },
    { label: "Ok", value: 1 },
    { label: "Good", value: 2 },
    { label: "Great", value: 3 },
    { label: "Awesome", value: 4 },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirmDate = (date) => {
    setDate(date);
    hideDatePicker();
  };
  const verifyPage = () => {
    let verified = false;
    if (
      page === 0 &&
      strainName !== "" &&
      thcFamily !== "" &&
      consumptionMethod !== ""
    ) {
      verified = true;
    } else if (page === 1 && dosage !== "") {
      verified = true;
    } else if (page === 2 && overallMood !== "" && moodWords.length > 0) {
      verified = true;
    } else if (page === 3 && positiveWords.length > 0) {
      verified = true;
    } else if (page === 4 && negativeWords.length > 0) {
      verified = true;
    } else if (page === 5 && wouldTryAgain !== "" && overallRating !== "") {
      verified = true;
    }
    setFieldsFilled(verified);
    return verified;
  };

  if (page === numPages)
    return (
      <Page>
        <Header
          text1="Session"
          text2="Completed!"
          handleBack={handleNavigation}
        />
        <View style={styles.endPage}>
          <Text style={styles.endPagePrompt}>
            You have successfully completed your{" "}
            <Text style={styles.endPagePromptHighlight}>1st</Text> entry.
          </Text>
          <ContainedButton handlePress={handleNavigation} text="View Entry" />
        </View>
      </Page>
    );
  return (
    <Page>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        style={{ color: "#FEFBE9" }}
      />
      <FormHeader
        navigation={navigation}
        date={date}
        showDatePicker={showDatePicker}
      />
      <SessionPage highlightText="product" page={0} currPage={page}>
        <View>
          <TextField
            label="Strain"
            value={strainName}
            setValue={setStrainName}
          />
        </View>
        <FormDivider />
        <TwoFieldRow
          value={thcCbdValue}
          setValue={setThcCbdValue}
          label="THC/CBD Contents"
          sublabel1="THC"
          sublabel2="CBD"
        />
        <View style={styles.spacer} />
        <ButtonSelectionFieldRow
          label="Type (Tap One)"
          value={thcValueType}
          setValue={setThcValueType}
          options={thcValueTypeSelection}
        />
        <FormDivider />
        <ButtonSelectionFieldRow
          label="Type (Tap One)"
          value={thcFamily}
          setValue={setThcFamily}
          options={thcFamilySelection}
        />
        <FormDivider />
        <ButtonSelectionFieldColumn
          label="Method (Tap One)"
          value={consumptionMethod}
          setValue={setConsumptionMethod}
          options={consumptionMethodSelection}
        />
      </SessionPage>
      <SessionPage highlightText="dosage" page={1} currPage={page}>
        <View>
          <TextField label="Dosage" value={dosage} setValue={setDosage} />
        </View>
        <FormDivider />
        <TwoFieldRow
          value={sessionOnset}
          setValue={setSessionOnset}
          label="Onset of Effect"
          sublabel1="Hr"
          sublabel2="Min"
        />
        <FormDivider />
        <TwoFieldRow
          value={sessionDuration}
          setValue={setSessionDuration}
          label="Duration of Effect"
          sublabel1="Hr"
          sublabel2="Min"
        />
      </SessionPage>
      <SessionPage highlightText="mood" page={2} currPage={page}>
        <MoodSelectionField
          label="Overall Mood"
          value={overallMood}
          setValue={setOverallMood}
        />
        <FormDivider />
        <MultipleSelectionField
          label="Mood Words(Select All That Apply)"
          value={moodWords}
          setValue={setMoodWords}
          options={moodWordsSelection}
        />
      </SessionPage>
      <SessionPage highlightText="positive effects" page={3} currPage={page}>
        <MultipleSelectionField
          label="Positive Effects(Select All That Apply)"
          value={positiveWords}
          setValue={setPositiveWords}
          options={positiveWordsSelection}
        />
      </SessionPage>
      <SessionPage highlightText="negative effects" page={4} currPage={page}>
        <MultipleSelectionField
          label="Negative Effects(Select All That Apply)"
          value={negativeWords}
          setValue={setNegativeWords}
          options={negativeWordsSelection}
        />
      </SessionPage>
      <SessionPage highlightText="overall session" page={5} currPage={page}>
        <RadioButtonSelection
          label="Would Try Again"
          value={wouldTryAgain}
          setValue={setWouldTryAgain}
          options={wouldTryAgainSelection}
        />
        <FormDivider />
        <RadioButtonSelection
          label="Overall Rating"
          value={overallRating}
          setValue={setOverallRating}
          options={overallRatingSelection}
        />
        <FormDivider />
        <View>
          <MultiLineTextField
            label="notes"
            lines={5}
            value={notes}
            setValue={setNotes}
          />
        </View>
      </SessionPage>
      <View style={styles.errorTextWrapper}>
        {!fieldsFilled && (
          <Text style={styles.errorText}>
            Please fill out all fields to continue
          </Text>
        )}
      </View>
      <Stepper
        page={page}
        setPage={setPage}
        numPages={numPages}
        verifyPage={verifyPage}
        submitForm={submitForm}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    height: 20,
    width: 20,
  },
  endPage: {
    width: "80%",
  },
  maxWidth: {
    width: "100%",
  },
  smallField: {
    width: 50,
  },
  endPagePrompt: {
    fontFamily: "Karla_700Bold",
    color: "#183A1D",
    fontSize: 20,
    marginBottom: 40,
  },
  errorText: {
    fontFamily: "Karla_700Bold",
    color: "#183A1D",
    fontSize: 15,
  },
  fieldText: {
    fontFamily: "Karla_400Regular",
    color: "#183A1D",
    fontSize: 15,
    marginBottom: 10,
  },
  fieldTextNoMargin: {
    fontFamily: "Karla_400Regular",
    color: "#183A1D",
    fontSize: 15,
  },
  endPagePromptHighlight: {
    textDecorationLine: "underline",
  },
  errorTextWrapper: {
    width: "90%",
    height: 20,
  },
});
