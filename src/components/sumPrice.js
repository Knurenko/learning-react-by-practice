import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const sumPrice = () => {
  const price = useSelector((state) => state.product);
  const getSum = (state) => {
    let sum = 0;
    state.foreach((item) => {
      sum += item.price;
    });

    return sum;
  };

  return (
    <View>
      <getSum />
    </View>
  );
};
