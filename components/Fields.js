import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, DefaultTheme, RadioButton } from "react-native-paper";
import { TextButton, MoodButton, CustomTextLeftButton } from "./Buttons";
export const ButtonSelectionFieldRow = ({
  label,
  value,
  setValue,
  options,
}) => {
  const handleSelection = (value) => {
    setValue(value);
  };
  const determineButtonColor = (item) => {
    return item === value ? "#F6C453" : "#183A1D";
  };
  return (
    <>
      <Text style={styles.buttonSelectionLabel}>{label}</Text>
      <View style={styles.buttonSelectionRowWrapper}>
        {options.map((option, key) => (
          <TextButton
            key={key}
            handlePress={() => handleSelection(option.value)}
            text={option.label}
            buttonStyle={{
              width: "auto",
            }}
            textStyle={{
              color: determineButtonColor(option.value),
              fontSize: 20,
            }}
          />
        ))}
      </View>
    </>
  );
};
export const MoodSelectionField = ({ label, value, setValue }) => {
  const handleSelection = (item) => {
    setValue(item);
  };
  const determineButtonColor = (item) => {
    return item === value ? "#F6C453" : "#183A1D";
  };
  const moodButtons = [
    { label: "emoticon-cry-outline", value: 0 },
    { label: "emoticon-sad-outline", value: 1 },
    { label: "emoticon-neutral-outline", value: 2 },
    { label: "emoticon-happy-outline", value: 3 },
    { label: "emoticon-outline", value: 4 },
    { label: "emoticon-excited-outline", value: 5 },
  ];
  return (
    <>
      <Text style={styles.buttonSelectionLabel}>{label}</Text>
      <View style={styles.moodButtonRowWrapper}>
        {moodButtons.map((option, key) => (
          <MoodButton
            key={key}
            icon={option.label}
            handlePress={() => handleSelection(option.value)}
            color={determineButtonColor(option.value)}
          />
        ))}
      </View>
    </>
  );
};
export const ButtonSelectionFieldColumn = ({
  label,
  value,
  setValue,
  options,
}) => {
  const handleSelection = (value) => {
    setValue(value);
  };
  const determineButtonColor = (item) => {
    return item === value ? "#F6C453" : "#183A1D";
  };
  return (
    <>
      <Text style={styles.buttonSelectionLabel}>{label}</Text>
      <View style={styles.buttonSelectionColWrapper}>
        {options.map((option, key) => (
          <CustomTextLeftButton
            key={key}
            text={option.label}
            textStyle={{ color: determineButtonColor(option.value) }}
            handlePress={() => handleSelection(option.value)}
          />
        ))}
      </View>
    </>
  );
};

export const MultipleSelectionField = ({ label, value, setValue, options }) => {
  const handleSelection = (selectedWord) => {
    const index = value.findIndex((word) => word === selectedWord);
    if (index === -1) setValue([...value, selectedWord]);
    else {
      let temp = value;
      temp.splice(index, 1);
      setValue([...temp]);
    }
  };
  const determineButtonColor = (selectedWord) => {
    return value.includes(selectedWord) ? "#F6C453" : "#183A1D";
  };
  return (
    <>
      <Text style={styles.buttonSelectionLabel}>{label}</Text>
      <View style={styles.buttonSelectionColWrapper}>
        {options.map((option, key) => (
          <CustomTextLeftButton
            key={key}
            text={option.label}
            textStyle={{ color: determineButtonColor(option.value) }}
            handlePress={() => handleSelection(option.value)}
          />
        ))}
      </View>
    </>
  );
};
export const TwoFieldRow = ({
  label,
  value,
  setValue,
  sublabel1,
  sublabel2,
}) => {
  return (
    <View style={styles.maxWidth}>
      <Text style={styles.textMarginBottom}>{label}</Text>
      <View style={styles.rowCenter}>
        <View style={styles.twoFieldFieldWrapper}>
          <LabellessTextField value={value} setValue={setValue} pos={0} />
        </View>
        <Text style={styles.text}>{sublabel1}</Text>
        <View style={styles.spacer} />
        <View style={styles.twoFieldFieldWrapper}>
          <LabellessTextField value={value} setValue={setValue} pos={1} />
        </View>
        <Text style={styles.text}>{sublabel2}</Text>
      </View>
    </View>
  );
};
export const MultiLineTextField = ({ label, lines, value, setValue }) => {
  const theme = {
    ...DefaultTheme,
    roundness: 40,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183A1D",
      secondary: "#F1B779",
      accent: "#F6C453",
      background: "#FEFBE9",
      text: "#183A1D",
      surface: "#3f37c9",
    },
  };
  return (
    <View style={styles.textFieldWrapper}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        theme={theme}
        mode="outlined"
        multiline={true}
        numberOfLines={lines}
        style={styles.textField}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};
export const RadioButtonSelection = ({ label, value, setValue, options }) => {
  const theme = {
    ...DefaultTheme,
    roundness: 50,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183A1D",
      secondary: "#F1B779",
      accent: "#F6C453",
      background: "#FEFBE9",
      text: "#183A1D",
      surface: "#3f37c9",
    },
  };
  const handleSelect = (index) => {
    setValue(options[index].value);
  };
  return (
    <>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.radioButtonWrapper}>
        {options.map((option, key) => (
          <View style={styles.colCenter} key={key}>
            <RadioButton
              theme={theme}
              value={option.value}
              status={value === option.value ? "checked" : "unchecked"}
              onPress={() => handleSelect(key)}
            />
            <Text style={styles.text}>{option.label}</Text>
          </View>
        ))}
      </View>
    </>
  );
};
export const TextField = ({
  label,
  disabled,
  secureTextEntry,
  value,
  setValue,
}) => {
  const theme = {
    ...DefaultTheme,
    roundness: 50,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183A1D",
      secondary: "#F1B779",
      accent: "#F6C453",
      background: "#FEFBE9",
      text: "#183A1D",
      surface: "#3f37c9",
    },
  };
  return (
    <View style={styles.textFieldWrapper}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        theme={theme}
        mode="outlined"
        disabled={disabled}
        style={styles.textField}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export const LabellessTextField = ({ value, setValue, pos }) => {
  const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183A1D",
      secondary: "#F1B779",
      accent: "#F6C453",
      background: "#FEFBE9",
      text: "#183A1D",
      surface: "#3f37c9",
    },
  };
  const handleChange = (text) => {
    if (pos === 0) {
      setValue([text, value[1]]);
    } else {
      setValue([value[0], text]);
    }
  };
  return (
    <TextInput
      theme={theme}
      mode="flat"
      underlineColor="#183A1D"
      style={styles.labellessTextFieldWrapper}
      value={value[pos]}
      onChangeText={handleChange}
      keyboardType="numeric"
      placeholder="00"
    />
  );
};

const styles = StyleSheet.create({
  colCenter: {
    alignItems: "center",
  },
  textFieldWrapper: {
    textAlign: "left",
    width: "100%",
  },
  labellessTextFieldWrapper: {
    fontSize: 15,
    height: 25,
    textAlign: "center",
  },
  label: {
    fontFamily: "Karla_700Bold",
    color: "#183A1D",
    fontSize: 20,
  },
  textMarginBottom: {
    color: "#183A1D",
    fontSize: 15,
    fontFamily: "Karla_400Regular",
    marginBottom: 10,
  },
  textField: {
    width: "100%",
    fontSize: 15,
  },
  text: {
    color: "#183A1D",
    fontSize: 15,
    fontFamily: "Karla_700Bold",
  },
  buttonSelectionRowWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    flexWrap: "wrap",
    width: "100%",
  },
  moodButtonRowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 20,
  },
  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonSelectionColWrapper: {
    width: "100%",
    alignItems: "flex-start",
  },
  twoFieldFieldWrapper: {
    width: 75,
    marginRight: 5,
  },
  spacer: {
    width: 20,
    height: 20,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});
