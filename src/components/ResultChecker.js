import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const ResultChecker = (props) => {
  const isValueNumber = !isNaN(props.value);
  const isNumberOdd = (n) => n % 2 === 0;

  const resultText = () => {
    return isValueNumber
      ? isNumberOdd(props.value)
        ? "Кртано 2"
        : "Не кратно 2"
      : "Это не число, введите число!";
  };

  const txt = resultText();
  return (
    <View>
      <Text style={isNumberOdd(props.value) ? styles.txt1 : styles.txt2}>
        {txt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt1: {
    textAlign: "center",
    color: "green",
    height: 30,
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 2,
    padding: 5,
  },
  txt2: {
    textAlign: "center",
    color: "red",
    height: 30,
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 2,
    padding: 5,
  },
});
