import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TouchableOpacityComponent() {
  return (
    <View style={styles.container}>
      <Text>Opacity</Text>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.5}
        style={styles.button}
      >
        <Text>Press</Text>
      </TouchableOpacity>
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
