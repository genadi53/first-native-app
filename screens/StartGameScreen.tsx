import React, { ReactNode, useState } from "react";
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

interface StartGameScreenProps {
  onGameStart: Function; //(selectedNumber: number) => void;
  children?: ReactNode;
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({ onGameStart }) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  const numberInputHandler = (input: string) => {
    setEnteredValue(input.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    const num = parseInt(enteredValue);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setSelectedNumber(num);
    setEnteredValue("");
    setConfirmed(true);
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card styles={styles.summary}>
        <Text>Chosen Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => {
            onGameStart(selectedNumber);
          }}
        />
      </Card>
    );
  } else {
    Alert;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card styles={styles.inputContainer as any}>
          <Text>Select a Number</Text>
          <Input
            styles={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            keyboardType="number-pad"
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Confirm "
                onPress={confirmInputHandler}
                color={Colors.primary_color}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.secondary_color}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center",
  },
  summary: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
function onStartGame(selectedNumber: number | undefined) {
  throw new Error("Function not implemented.");
}
