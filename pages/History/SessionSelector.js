import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import moment from "moment";
import { FormNavButton } from "../../components/Buttons";
import { ButtonSelectionFieldColumn } from "../../components/Fields";
export default function SessionSelector({
  sessionSelection,
  session,
  setSession,
  open,
  setOpen,
}) {
  const selection = sessionSelection.map((session) => ({
    label: `${session.strain !== "" ? session.strain : "Unknown"}, ${moment(
      session.date.toDate()
    ).format("h:mm a")}`,
    value: session,
  }));
  useEffect(() => {
    if (session !== null) {
      setOpen(false);
    }
  }, [session]);
  const closeSessionSelection = () => {
    setOpen(false);
  };
  return (
    <Portal>
      <Dialog visible={open} onDismiss={closeSessionSelection}>
        <Dialog.Content>
          <View style={styles.rowCenter}>
            <Text style={styles.header}>Select Session</Text>
            <View style={styles.grow} />
            <FormNavButton text="Back" handlePress={closeSessionSelection} />
          </View>
          <ButtonSelectionFieldColumn
            label=""
            value={session}
            setValue={setSession}
            options={selection}
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  header: {
    fontFamily: "Sansita_700Bold",
    fontSize: 25,
    color: "#F6C453",
  },
});
