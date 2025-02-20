import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setName}
            value={name}
          />
        </View>

        <View>
          <Text style={styles.label}>Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Number"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setNumber}
            value={number}
          />
        </View>

        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setEmail}
            value={email}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setUser({ name, number, email })}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.userInfo}>
        <Text style={styles.userText}>Name: {user.name}</Text>
        <Text style={styles.userText}>Number: {user.number}</Text>
        <Text style={styles.userText}>Email: {user.email}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#101012",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "rgb(240, 240, 240)",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  label: {
    color: "rgb(240, 240, 240)",
    marginBottom: 5,
  },
  formContainer: {
    width: 300,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "rgb(60, 161, 255)",
  },
  userInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  userText: {
    color: "white",
    fontSize: 16,
  },
});
