import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Button,
  Modal,
} from "react-native";

const todoInput = (props: any) => {
  const [todo, setTodo] = useState("");

  const inputHandler = (text: string) => {
    setTodo(text);
  };

  // const a = () => {
  //   alert(props.visible);
  // };
  // a();

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={
            Platform.OS === "android"
              ? "Enter something..."
              : "Enter somthing else..."
          }
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 15,
            marginBottom: 10,
          }}
          value={todo}
          onChangeText={inputHandler}
        />
        <Button
          title="ADD"
          onPress={() => {
            props.onAddTodo(todo);
            setTodo("");
          }}
        />
        <Button
          color={"red"}
          title="Cancel"
          onPress={() => {
            props.onCancel();
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderBottomWidth: 1,
  },
});

export default todoInput;
