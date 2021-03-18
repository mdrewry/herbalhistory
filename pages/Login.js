import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default function Login({ setSignedIn }) {
  const handlePress = () => {
    setSignedIn(true);
  };
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
