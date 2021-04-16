import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ScrollPage from "../../components/ScrollPage";
import Page from "../../components/Page";
import FormHeader from "./FormHeader";
import FormPage from "./FormPage";
import FormCompleted from "./FormCompleted";
import FormMissingFields from "./FormMissingFields";
import FormDivider from "../../components/FormDivider";
import fieldLists from "../../fieldLists";
import { firestore } from "../../firebase";
import {
  TextField,
  MultiLineTextField,
  MultipleSelectionField,
  ButtonSelectionFieldRow,
  ButtonSelectionFieldColumn,
  TwoFieldRow,
  MoodSelectionField,
  RadioButtonSelection,
  OutOfTenField,
  CustomCheckbox,
} from "../../components/Fields";

import Stepper from "../../components/Stepper";

export default function AddSession({ user, navigation }) {
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
  const [anxietyBeforeIntake, setAnxietyBeforeIntake] = useState(0);
  const [anxietyAfterIntake, setAnxietyAfterIntake] = useState(0);
  const [goodForAnxiety, setGoodForAnxiety] = useState(false);
  const [restlessnessBeforeIntake, setRestlessnessBeforeIntake] = useState(0);
  const [restlessnessAfterIntake, setRestlessnessAfterIntake] = useState(0);
  const [sleepDescription, setSleepDescription] = useState("");
  const [goodForSleep, setGoodForSleep] = useState(false);
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
      dispensary,
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
        enabled:
          strain || dispensary || thcCbdValue || cannabisFamily || method,
        pageNum: -1,
      },
      { enabled: dosage || duration || onset, pageNum: -1 },
      { enabled: moodWords || overallMood, pageNum: -1 },
      { enabled: positiveWords, pageNum: -1 },
      { enabled: negativeWords, pageNum: -1 },
      { enabled: wouldTryAgain || overallRating || notes, pageNum: -1 },
      { enabled: sleep || anxiety, pageNum: -1 },
    ];
    let numPages = 0;
    pages = pages.map((page) => {
      if (!page.enabled) return page;
      page.pageNum = numPages;
      numPages++;
      return page;
    });
    return { numPages, pages };
  };
  const { numPages, pages } = calculateEnabledPages();
  const handleNavigation = (screen) => {
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
    setAnxietyBeforeIntake(0);
    setAnxietyAfterIntake(0);
    setGoodForAnxiety(false);
    setRestlessnessBeforeIntake(0);
    setRestlessnessAfterIntake(0);
    setSleepDescription("");
    setGoodForSleep(false);
    navigation.navigate(screen);
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
      anxietyStats: {
        anxietyBefore: anxietyBeforeIntake,
        anxietyAfter: anxietyAfterIntake,
        goodForAnxiety: goodForAnxiety,
      },
      sleepStats: {
        restlessnessBefore: restlessnessBeforeIntake,
        restlessnessAfter: restlessnessAfterIntake,
        description: sleepDescription,
        goodForSleep: goodForSleep,
      },
    });
    await user.ref.update({
      numSessions: user.numSessions++,
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
      page === pages[0].pageNum &&
      (strainName !== "" || !trackingPreference.strain) &&
      (cannabisFamily !== "" || !trackingPreference.cannabisFamily) &&
      (consumptionMethod !== "" || !trackingPreference.method) &&
      (dispensary !== "" || !trackingPreference.dispensary)
    ) {
      verified = true;
    } else if (
      page === pages[1].pageNum &&
      (dosage !== "" || !trackingPreference.dosage)
    ) {
      verified = true;
    } else if (
      page === pages[2].pageNum &&
      (overallMood !== "" || !trackingPreference.overallMood) &&
      (moodWords.length > 0 || !trackingPreference.moodWords)
    ) {
      verified = true;
    } else if (
      page === pages[3].pageNum &&
      (positiveWords.length > 0 || !trackingPreference.positiveWords)
    ) {
      verified = true;
    } else if (
      page === pages[4].pageNum &&
      (negativeWords.length > 0 || !trackingPreference.negativeWords)
    ) {
      verified = true;
    } else if (
      page === pages[5].pageNum &&
      (wouldTryAgain !== "" || !trackingPreference.wouldTryAgain) &&
      (overallRating !== "" || !trackingPreference.overallRating)
    ) {
      verified = true;
    } else if (
      page === pages[6].pageNum &&
      ((anxietyBeforeIntake <= 10 && anxietyBeforeIntake >= 0) ||
        !trackingPreference.anxiety) &&
      ((anxietyAfterIntake <= 10 && anxietyAfterIntake >= 0) ||
        !trackingPreference.anxiety) &&
      ((restlessnessBeforeIntake <= 10 && restlessnessBeforeIntake >= 0) ||
        !trackingPreference.sleep) &&
      ((restlessnessAfterIntake <= 10 && restlessnessAfterIntake >= 0) ||
        !trackingPreference.sleep)
    ) {
      verified = true;
    }
    setFieldsFilled(verified);
    return verified;
  };
  if (numPages === 0)
    return <FormMissingFields handleNavigation={handleNavigation} />;
  if (page === numPages)
    return <FormCompleted user={user} handleNavigation={handleNavigation} />;

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
        date={date}
        showDatePicker={showDatePicker}
        handleCancel={handleNavigation}
      />
      <ScrollPage>
        <FormPage highlightText="product" page={pages[0]} currPage={page}>
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
            </>
          )}
          {trackingPreference.dispensary && (
            <>
              <View>
                <TextField
                  label="Dispensary"
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
        </FormPage>
        <FormPage highlightText="dosage" page={pages[1]} currPage={page}>
          {trackingPreference.dosage && (
            <>
              <View>
                <TextField label="Dosage" value={dosage} setValue={setDosage} />
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
        </FormPage>
        <FormPage highlightText="mood" page={pages[2]} currPage={page}>
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
        </FormPage>
        <FormPage
          highlightText="positive effects"
          page={pages[3]}
          currPage={page}
        >
          <MultipleSelectionField
            label="Positive Effects(Select All That Apply)"
            value={positiveWords}
            setValue={setPositiveWords}
            options={positiveWordsSelection}
          />
        </FormPage>
        <FormPage
          highlightText="negative effects"
          page={pages[4]}
          currPage={page}
        >
          <MultipleSelectionField
            label="Negative Effects(Select All That Apply)"
            value={negativeWords}
            setValue={setNegativeWords}
            options={negativeWordsSelection}
          />
        </FormPage>
        <FormPage
          highlightText="overall session"
          page={pages[5]}
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
        </FormPage>
        <FormPage
          highlightText="mental wellness effects"
          page={pages[6]}
          currPage={page}
        >
          {trackingPreference.anxiety && (
            <>
              <OutOfTenField
                label="Anxiety Level Before Intake:"
                value={anxietyBeforeIntake}
                setValue={setAnxietyBeforeIntake}
              />
              <View style={styles.spacer} />
              <OutOfTenField
                label="Anxiety Level After Intake:"
                value={anxietyAfterIntake}
                setValue={setAnxietyAfterIntake}
              />
              <View style={styles.spacer} />
              <CustomCheckbox
                value={goodForAnxiety}
                setValue={setGoodForAnxiety}
                label="Good Product for Anxiety"
              />
              <FormDivider />
            </>
          )}
          {trackingPreference.sleep && (
            <>
              <OutOfTenField
                label="Restlessness Level Before Intake:"
                value={restlessnessBeforeIntake}
                setValue={setRestlessnessBeforeIntake}
              />
              <View style={styles.spacer} />
              <OutOfTenField
                label="Restlessness Level After Intake:"
                value={restlessnessAfterIntake}
                setValue={setRestlessnessAfterIntake}
              />
              <View style={styles.spacer} />
              <View>
                <MultiLineTextField
                  label="Sleep Description"
                  lines={5}
                  value={sleepDescription}
                  setValue={setSleepDescription}
                />
              </View>
              <View style={styles.spacer} />
              <CustomCheckbox
                value={goodForSleep}
                setValue={setGoodForSleep}
                label="Good Product for Sleep"
              />
              <FormDivider />
            </>
          )}
        </FormPage>
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
  maxWidth: {
    width: "100%",
  },
  smallField: {
    width: 50,
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
  errorTextWrapper: {
    width: "90%",
    height: 20,
  },
  paddingWrapper: {
    width: "95%",
    alignSelf: "center",
  },
});
