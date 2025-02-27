import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./components/ProfileScreen";
import ContactScreen from "./components/MyBankScreen";
import MyBankScreen from "./components/ContactScreen";
import AppStackNested from "./AppStackNested";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            toBarLabelPosition: "beside-icon",
          }}
        >
          <Tab.Screen name="My Bank" component={MyBankScreen} />
          <Tab.Screen name="Contact Us" component={ContactScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="menu" component={AppStackNested} />
        </Tab.Navigator>
      </NavigationContainer>
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
