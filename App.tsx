import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [rounds, setRounds] = useState<number>(0);

  const startGameHandler = (selectedNumber: number) => {
    setSelectedNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setRounds(numberOfRounds);
  };

  let content = <StartGameScreen onGameStart={startGameHandler} />;
  if (selectedNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={"Guess The Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
