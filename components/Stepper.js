import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import { FormNavButton } from "./Buttons";

export default function Stepper({
  page,
  setPage,
  numPages,
  verifyPage,
  submitForm,
}) {
  const marks = new Array(numPages).fill(0);
  const handleBack = () => {
    setPage((page) => page - 1);
  };
  const handleNext = async () => {
    if (verifyPage()) setPage((page) => page + 1);
    if (page === numPages - 1) {
      await submitForm();
    }
  };
  const determineStepColor = (key) => {
    if (key < page) return "#183A1D";
    if (key === page) return "#F6C453";
    return "#FEFBE9";
  };
  const rightButtonText = page === numPages - 1 ? "Finish" : "Next";
  return (
    <View style={styles.rowCenter}>
      <FormNavButton
        text="Back"
        handlePress={handleBack}
        disabled={page === 0}
      />
      {numPages > 1 ? (
        <View style={styles.stepperIconWrapper}>
          {marks.map((element, key) => (
            <Surface
              key={key}
              style={{
                backgroundColor: determineStepColor(key),
                width: 30,
                height: 30,
                borderColor: "#183A1D",
                borderWidth: 2,
                borderRadius: 15,
              }}
            />
          ))}
        </View>
      ) : (
        <View style={styles.grow} />
      )}

      <FormNavButton
        text={rightButtonText}
        handlePress={handleNext}
        disabled={page >= numPages}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  stepperIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingRight: 10,
  },
  grow: { flexGrow: 1 },
});
