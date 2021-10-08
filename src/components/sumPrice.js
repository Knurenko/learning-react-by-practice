import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const sumPrice = () => {
  const price = useSelector((state) => state.product);
  const sumall = price
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <View>
      <getSum />
    </View>
  );
};
