import { StyleSheet, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./components/ProfileScreen";
import ContactScreen from "./components/ContactScreen";
import MyBankScreen from "./components/MyBankScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  console.log(ProfileScreen);

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          toBarLabelPosition: "beside-icon",
        }}
      >
        <Tab.Screen name="My Bank" component={MyBankScreen} />
        <Tab.Screen name="Contact Us" component={ContactScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
