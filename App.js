import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SwitchComponent from "./components/switchComponents";
import BackgroundImageComponent from "./components/backgroundImageComponents";
import ActiveIndicatorComponent from "./components/activeIndicatorComponent";
import AlertComponent from "./components/AlertComponent";
import ScrollComponent from "./components/ScrollComponent";
import TouchableHighlightComponent from "./components/TouchableHighlightComponent";
import TouchableOpacityComponent from "./components/TouchableOpacityComponent";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <SwitchComponent />
        <BackgroundImageComponent />
        <ActiveIndicatorComponent />
        <AlertComponent />
        <ScrollComponent />
        <TouchableHighlightComponent />
        <TouchableOpacityComponent />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
