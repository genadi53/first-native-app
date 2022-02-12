import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const inputHandler = (text: string) => {
    setTodo(text);
  };

  const addTodoHandler = () => {
    setTodos((currentTodos) => [...currentTodos, todo]);
  };

  return (
    <View style={{ padding: 30 }}>
      <StatusBar style="auto" />
      {
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter something..."
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              padding: 15,
            }}
            value={todo}
            onChangeText={inputHandler}
          />
          <Button
            title="ADD"
            onPress={() => {
              addTodoHandler();
            }}
          />
        </View>
      }
      <View>
        {todos.map((td: string, idx) => (
          <Text key={idx}>{td}</Text>
        ))}
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
