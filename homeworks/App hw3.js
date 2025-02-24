import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Animated,
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

  const handleCheckboxChange = (id, check) => {
    const todoToChange = todo.find((item) => item.id === id);
    todoToChange.check = !check;
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return todoToChange;
      }
      return item;
    });

    setTodo(updatedTodo);
  };

  const handleDelete = (id) => {
    console.log(id, "id");

    const updatedTodo = todo.filter((item) => {
      return item.id !== id;
    });
    console.log(updatedTodo, "upd");
    setTodo(updatedTodo);
  };

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-do</Text>
      <View style={styles.formContainer}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgb(200, 200, 200)"
            onChangeText={setName}
            value={name}
          />
        </Animated.View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTodo([
            ...todo,
            { name, check: false, id: todo.length.toString() },
          ]);
          rotate();
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <ScrollView style={styles.todoInfo}>
        {todo.map((todo) => (
          <View
            style={styles.todo} // Я попытался сделать анимацию тут. Не вышло. Поэтому крутить будем инпут
            key={todo.id}
          >
            <Button
              onPress={() => {
                handleCheckboxChange(todo.id, todo.check);
              }}
              title={todo.check ? "☑️" : "🟦"}
            ></Button>

            <Text style={styles.todoText}>{todo.name}</Text>

            <Button onPress={() => handleDelete(todo.id)} title="Del"></Button>
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
    marginLeft: 10,
  },

  todo: {
    display: "flex",
    flexDirection: "row",
    width: 400,
    backgroundColor: "rgb(60, 161, 255)",
    justifyContent: "space-between",
  },
});
