import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform,
  // ScrollView,
  FlatList,
} from "react-native";
import Todo from "./components/todo";
import TodoInput from "./components/todoInput";

interface todosInterface {
  id: string;
  value: string;
}

export default function App() {
  const [todos, setTodos] = useState<todosInterface[]>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  const addTodoHandler = (todoValue: string) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random().toString(), value: todoValue },
    ]);
    setInputVisible(false);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((td) => td.id !== id);
    });
  };

  const cancelTodoInput = () => {
    setInputVisible(false);
  };

  return (
    <View style={{ padding: 30 }}>
      <StatusBar style="auto" />
      <Button
        title="Add new Todo"
        onPress={() => {
          setInputVisible(true);
        }}
      />
      <TodoInput
        onAddTodo={addTodoHandler}
        visible={inputVisible}
        onCancel={cancelTodoInput}
      />
      <View>
        <FlatList
          data={todos}
          keyExtractor={(item, _index) => item.id}
          renderItem={(itemData) => (
            <Todo
              id={itemData.item.id}
              value={itemData.item.value}
              onDelete={deleteTodoHandler}
            />
            // <View style={styles.listItem}>
            //   <Text>{itemData.item.value}</Text>
            // </View>
          )}
        />
        {/* {todos.map((td: string, idx) => (
          <ScrollView style={styles.listItem}>
            <Text key={idx}>{td}</Text>
          </ScrollView>
        ))} */}
      </View>
    </View>
  );
}
