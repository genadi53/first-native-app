import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../colors";

interface StartGameScreenProps {}

const StartGameScreen: React.FC<StartGameScreenProps> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card styles={styles.inputContainer as any}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Confirm "
              onPress={() => {}}
              color={Colors.primary_color}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={() => {}}
              color={Colors.secondary_color}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxHeight: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
