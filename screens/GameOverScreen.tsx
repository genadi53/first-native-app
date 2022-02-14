import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
