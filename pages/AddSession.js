import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ScrollPage from "../components/ScrollPage";
import Page from "../components/Page";
import SessionPage from "../components/SessionPage";
import { ContainedButton } from "../components/Buttons";
import FormDivider from "../components/FormDivider";
import fieldLists from "../fieldLists";
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
export default function AddSession({ user, navigation, setBarDisabled }) {
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(new Date());
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [strainName, setStrainName] = useState("");
  const [thcCbdValue, setThcCbdValue] = useState(["", ""]);
  const [thcValueType, setThcValueType] = useState("%");
  const [cannabisFamily, setCannabisFamily] = useState("Unknown");
  const [dispensary, setDispensary] = useState("");
  const [consumptionMethod, setConsumptionMethod] = useState(
    "Inhalation (smoke)"
  );
  const [dosage, setDosage] = useState("");
  const [sessionOnset, setSessionOnset] = useState(["", ""]);
  const [sessionDuration, setSessionDuration] = useState(["", ""]);
  const [overallMood, setOverallMood] = useState(0);
  const [moodWords, setMoodWords] = useState([]);
  const [positiveWords, setPositiveWords] = useState([]);
  const [negativeWords, setNegativeWords] = useState([]);
  const [overallRating, setOverallRating] = useState(4);
  const [wouldTryAgain, setWouldTryAgain] = useState(true);
  const [notes, setNotes] = useState("");
  const {
    cannabisFamilySelection,
    thcValueTypeSelection,
    consumptionMethodSelection,
    moodWordsSelection,
    positiveWordsSelection,
    negativeWordsSelection,
    wouldTryAgainSelection,
    overallRatingSelection,
  } = fieldLists;
  const trackingPreference = user.trackingPreference;
  const calculateEnabledPages = () => {
    const {
      method,
      strain,
      cannabisFamily,
      thcCbdValue,
      dosage,
      duration,
      onset,
      moodWords,
      negativeWords,
      positiveWords,
      overallMood,
      overallRating,
      wouldTryAgain,
      notes,
      sleep,
      anxiety,
    } = trackingPreference;
    let pages = [
      {
        enabled: strain || thcCbdValue || cannabisFamily || method,
        pageNum: 0,
      },
      { enabled: dosage || duration || onset, pageNum: 0 },
      { enabled: moodWords || overallMood, pageNum: 0 },
      { enabled: positiveWords, pageNum: 0 },
      { enabled: negativeWords, pageNum: 0 },
      { enabled: wouldTryAgain || overallRating || notes, pageNum: 0 },
    ];
    let numPages = 0;
    pages = pages.map((page) => {
      if (!page.enabled) return page;
      page.pageNum = numPages;
      numPages++;
      return page;
    });
    console.log(pages);
    return { numPages, pages };
  };
  const { numPages, pages } = calculateEnabledPages();

  useEffect(() => {
    const unsubscribeNavigator = navigation.addListener("tabPress", (e) => {
      setBarDisabled(true);
    });
    return unsubscribeNavigator;
  }, []);
  const handleNavigation = () => {
    setPage(0);
    setStrainName("");
    setThcCbdValue(["", ""]);
    setThcValueType("%");
    setCannabisFamily("Sativa");
    setDispensary("");
    setConsumptionMethod("Inhalation (smoke)");
    setDosage("");
    setSessionOnset(["", ""]);
    setSessionDuration(["", ""]);
    setOverallMood(0);
    setMoodWords([]);
    setPositiveWords([]);
    setNegativeWords([]);
    setOverallRating(4);
    setWouldTryAgain(true);
    setNotes("");
    setBarDisabled(false);
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
      cannabisFamily: cannabisFamily,
      dispensary: dispensary,
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
      (strainName !== "" || !trackingPreference.strain) &&
      (cannabisFamily !== "" || !trackingPreference.cannabisFamily) &&
      (consumptionMethod !== "" || !trackingPreference.method)
    ) {
      verified = true;
    } else if (page === 1 && (dosage !== "" || !trackingPreference.dosage)) {
      verified = true;
    } else if (
      page === 2 &&
      (overallMood !== "" || !trackingPreference.overallMood) &&
      (moodWords.length > 0 || !trackingPreference.moodWords)
    ) {
      verified = true;
    } else if (
      page === 3 &&
      (positiveWords.length > 0 || !trackingPreference.positiveWords)
    ) {
      verified = true;
    } else if (
      page === 4 &&
      (negativeWords.length > 0 || !trackingPreference.negativeWords)
    ) {
      verified = true;
    } else if (
      page === 5 &&
      (wouldTryAgain !== "" || !trackingPreference.wouldTryAgain) &&
      (overallRating !== "" || !trackingPreference.overallRating)
    ) {
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
        handleCancel={handleNavigation}
      />

      <ScrollPage>
        {pages[0].enabled && (
          <SessionPage
            highlightText="product"
            page={pages[0].pageNum}
            currPage={page}
          >
            {trackingPreference.strain && (
              <>
                <View>
                  <TextField
                    label="Strain"
                    value={strainName}
                    setValue={setStrainName}
                  />
                </View>
                <FormDivider />
                <View>
                  <TextField
                    label="Dispensary (optional)"
                    value={dispensary}
                    setValue={setDispensary}
                  />
                </View>
                <FormDivider />
              </>
            )}
            {trackingPreference.thcCbdValue && (
              <>
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
              </>
            )}
            {trackingPreference.cannabisFamily && (
              <>
                <ButtonSelectionFieldRow
                  label="Family (Tap One)"
                  value={cannabisFamily}
                  setValue={setCannabisFamily}
                  options={cannabisFamilySelection}
                />
                <FormDivider />
              </>
            )}
            {trackingPreference.method && (
              <ButtonSelectionFieldColumn
                label="Method (Tap One)"
                value={consumptionMethod}
                setValue={setConsumptionMethod}
                options={consumptionMethodSelection}
              />
            )}
          </SessionPage>
        )}
        {pages[1].enabled && (
          <SessionPage
            highlightText="dosage"
            page={pages[1].pageNum}
            currPage={page}
          >
            {trackingPreference.dosage && (
              <>
                <View>
                  <TextField
                    label="Dosage"
                    value={dosage}
                    setValue={setDosage}
                  />
                </View>
                <FormDivider />
              </>
            )}
            {trackingPreference.onset && (
              <>
                <TwoFieldRow
                  value={sessionOnset}
                  setValue={setSessionOnset}
                  label="Onset of Effect"
                  sublabel1="Hr"
                  sublabel2="Min"
                />
                <FormDivider />
              </>
            )}
            {trackingPreference.duration && (
              <>
                <TwoFieldRow
                  value={sessionDuration}
                  setValue={setSessionDuration}
                  label="Duration of Effect"
                  sublabel1="Hr"
                  sublabel2="Min"
                />
              </>
            )}
          </SessionPage>
        )}
        {pages[2].enabled && (
          <SessionPage
            highlightText="mood"
            page={pages[2].pageNum}
            currPage={page}
          >
            {trackingPreference.overallMood && (
              <>
                <MoodSelectionField
                  label="Overall Mood"
                  value={overallMood}
                  setValue={setOverallMood}
                />
                <FormDivider />
              </>
            )}
            {trackingPreference.moodWords && (
              <>
                <MultipleSelectionField
                  label="Mood Words(Select All That Apply)"
                  value={moodWords}
                  setValue={setMoodWords}
                  options={moodWordsSelection}
                />
              </>
            )}
          </SessionPage>
        )}
        {pages[3].enabled && (
          <SessionPage
            highlightText="positive effects"
            page={pages[3].pageNum}
            currPage={page}
          >
            <MultipleSelectionField
              label="Positive Effects(Select All That Apply)"
              value={positiveWords}
              setValue={setPositiveWords}
              options={positiveWordsSelection}
            />
          </SessionPage>
        )}
        {pages[4].enabled && (
          <SessionPage
            highlightText="negative effects"
            page={pages[4].pageNum}
            currPage={page}
          >
            <MultipleSelectionField
              label="Negative Effects(Select All That Apply)"
              value={negativeWords}
              setValue={setNegativeWords}
              options={negativeWordsSelection}
            />
          </SessionPage>
        )}
        {pages[5].enabled && (
          <SessionPage
            highlightText="overall session"
            page={pages[5].pageNum}
            currPage={page}
          >
            {trackingPreference.wouldTryAgain && (
              <>
                <RadioButtonSelection
                  label="Would Try Again"
                  value={wouldTryAgain}
                  setValue={setWouldTryAgain}
                  options={wouldTryAgainSelection}
                />
                <FormDivider />
              </>
            )}
            {trackingPreference.overallRating && (
              <>
                <RadioButtonSelection
                  label="Overall Rating"
                  value={overallRating}
                  setValue={setOverallRating}
                  options={overallRatingSelection}
                />
                <FormDivider />
              </>
            )}
            {trackingPreference.notes && (
              <View>
                <MultiLineTextField
                  label="notes"
                  lines={5}
                  value={notes}
                  setValue={setNotes}
                />
              </View>
            )}
          </SessionPage>
        )}
        <View style={styles.paddingWrapper}>
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
        </View>
      </ScrollPage>
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
  paddingWrapper: {
    width: "95%",
    alignSelf: "center",
  },
});
