import React from "react";
import { Text, View } from "react-native";

export const ResultChecker = (props) => {
  const isValueNumber = !isNaN(props.value);
  const isNumberOdd = (n) => n % 2 === 0;
  const resultText = () => {
    return isValueNumber
      ? isNumberOdd(props.value)
        ? "Number is Odd"
        : "Number is't Odd"
      : "It is not a Number";
  };

  const txt = resultText();
  return (
    <View>
      <Text>{txt}</Text>
    </View>
  );
};
