import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ActivityIndicator,
} from "react-native";

export default function activeIndicatorComponent() {
  return (
    <View style={styles.container}>
      <Text>Helo</Text>
      <ActivityIndicator size="large" color="yellow" />
      <ActivityIndicator size="small" color="red" />
      <ActivityIndicator color="blue" />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
