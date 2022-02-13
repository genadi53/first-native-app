import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface InputProps {
  styles?: any;
  // numberInputHandler?: any;
}

const Input: React.FC<TextInputProps & InputProps> = (props: any) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.styles }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
