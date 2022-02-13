import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  // TouchableHighlight,
  // TouchableNativeFeedback,
  // TouchableWithoutFeedback,
} from "react-native";

interface todosInterface {
  id: string;
  value: string;
  onDelete: any;
}

const Todo = (props: todosInterface) => {
  return (
    <TouchableOpacity
      // underlayColor={"blue"}
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text key={props.id}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "grey",
    borderColor: "black",
    borderBottomWidth: 1,
  },
});

export default Todo;
