import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [rounds, setRounds] = useState<number>(0);

  const newGameHandler = () => {
    setRounds(0);
    setSelectedNumber(null);
  };

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
    content = (
      <GameOverScreen
        rounds={rounds}
        selectedNumber={selectedNumber}
        onRestart={newGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />
      <Header title={"Guess The Number"} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
