import { Alert, Button, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBankScreen from "./components/MyBankScreen";
import ProfileScreen from "./components/ProfileScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maini"
        options={{
          title: "My Bank",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "royalblue" },
          headerTitleStyle: { fontWeight: "900" },
          headerRight: () => (
            <Button
              title="Info"
              color="white"
              onPress={() => {
                Alert.alert("This is Main page");
              }}
            />
          ),
        }}
        component={MyBankScreen}
      />
      <Stack.Screen
        name="About"
        options={{ title: "contacts" }}
        component={ProfileScreen}
        initialParams={{ name: "Guest" }}
      />
    </Stack.Navigator>
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
