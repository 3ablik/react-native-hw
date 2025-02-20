import { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function TouchableHighlightComponent() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="red"
        activeOpacity={0.5}
      >
        <View style={styles.button}>
          <Text>Touch</Text>
        </View>
      </TouchableHighlight>
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
  button: {
    backgroundColor: "gray",
  },
});
