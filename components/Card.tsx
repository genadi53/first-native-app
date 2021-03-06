import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  styles?: any;
}

const Card: React.FC<CardProps> = (props: any) => {
  return (
    <View style={{ ...styles.card, ...props.styles }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
