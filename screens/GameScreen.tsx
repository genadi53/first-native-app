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

interface GameScreenProps {
  userChoice: number;
  onGameOver: Function;
}

const generateRandomNumber: number | any = (
  min: number,
  max: number,
  exclude: number
) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rand = Math.floor(Math.random() * (max - min)) + min;
  if (rand === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rand;
  }
};

const GameScreen: React.FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  const [rounds, setRounds] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const guessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }

    if (direction === "higher") {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Computer Guessed</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card styles={styles.buttonContainer}>
        <Button
          title="Lower"
          onPress={() => {
            guessHandler("lower");
          }}
        />
        <Button
          title="Higher"
          onPress={() => {
            guessHandler("higher");
          }}
        />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
