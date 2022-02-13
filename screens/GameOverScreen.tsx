import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContiner";
import Colors from "../colors";

interface GameOverScreenProps {
  rounds: number;
  selectedNumber: number | null;
  onRestart: Function;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  rounds,
  selectedNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!</Text>
      <Text>Number was: {selectedNumber}</Text>
      <Text>Rounds: {rounds}</Text>
      <View>
        <Button
          title="New Game"
          onPress={() => {
            onRestart();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameOverScreen;
