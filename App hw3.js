import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,

} from "react-native";

export default function App() {
  const [todo, setTodo] = useState([
    {
      name: "Понабирают всяких",
      check: false,
      id: "0",
    },
    {
      name: "AAA",
      check: false,
      id: "1",
    },
    {
      name: "Бетмен",
      check: false,
      id: "2",
    },
  ]);
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do</Text>
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

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTodo([...todo, { name, check, id: todo.length.toString() }]);
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <ScrollView style={styles.todoInfo}>
        {todo.map((todo) => (
          <View key={todo.id}>
              

              <Text style={styles.todoText}>{todo.name}</Text>
          </View>
        ))}
      </ScrollView>

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
  todoInfo: {
    marginTop: 20,
  },
  todoText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
