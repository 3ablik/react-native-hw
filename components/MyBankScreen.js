import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";

export default function HomeScreen() {
  const [balance, setBalance] = useState(0);
  const [inputAdd, setInputAdd] = useState(0);
  const [inputGet, setInputGet] = useState(0);

  const addTo = () => {
    if (isNaN(inputAdd) || inputAdd <= 0) {
      Alert.alert("Input right number!");
    } else {
      setBalance(balance + Number(inputAdd));
    }
  };

  const getFrom = () => {
    if (isNaN(inputGet) || inputGet <= 0) {
      Alert.alert("Input right number!");
    } else {
      if (inputGet > balance) {
        Alert.alert("You do not have enough money!");
      } else {
        setBalance(balance - Number(inputGet));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bankContainer}>
        <Text style={styles.title}>Your Balance:</Text>
        <Text style={styles.balance}>{balance}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add to card"
            keyboardType="numeric"
            value={inputAdd}
            onChangeText={setInputAdd}
          />
          <Button title="Add to card!" onPress={() => addTo()} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Get from card"
            keyboardType="numeric"
            value={inputGet}
            onChangeText={setInputGet}
          />
          <Button title="Get from card!" onPress={() => getFrom()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balance: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  bankContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
  },
});
