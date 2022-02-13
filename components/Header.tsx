import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../colors";
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary_color,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
