import { useState } from "react";
import { StyleSheet, Text, View, Switch, Alert, Button } from "react-native";

export default function AlertComponent() {
  const handleAlert = () => {
    Alert.alert("Attetntion", [{ text: "Yes" }, { text: "No" }]);
  };
  return (
    <View style={styles.container}>
      <Text>Alert</Text>
      <Button title="click" onPress={handleAlert}></Button>
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
