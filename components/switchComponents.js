import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default function SwitchComponent() {
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        value={isSwitch}
        onValueChange={() => {
          setIsSwitch((prevState) => !prevState);
        }}
        thumbColor={"red"}
        trackColor={{ false: "black", true: "blue" }}
        ios_backgroundColor="black"
      />
      <Text> {isSwitch ? "True" : "False"} </Text>
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
