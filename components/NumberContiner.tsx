import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../colors";

interface NumberContainerProps {}

const NumberContainer: React.FC<NumberContainerProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.secondary_color,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.secondary_color,
    fontSize: 22,
  },
});

export default NumberContainer;
