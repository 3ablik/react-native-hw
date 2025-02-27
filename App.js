import { StyleSheet, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./components/ProfileScreen";
import ContactScreen from "./components/ContactScreen";
import MyBankScreen from "./components/MyBankScreen";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  console.log(ProfileScreen);

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="My Bank"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="bank" size={24} color="black" />
            ),
          }}
          component={MyBankScreen}
        />
        <Tab.Screen
          name="Contact Us"
          options={{
            tabBarIcon: () => (
              <AntDesign name="questioncircleo" size={24} color="black" />
            ),
          }}
          component={ContactScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ),
          }}
          component={ProfileScreen}
        />
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
