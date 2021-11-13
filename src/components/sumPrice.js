import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const SumPrice = () => {
  const products = useSelector((state) => state.product);

  const getTotalCost = (products) => {
    let sum = 0;
    products.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };

  return (
    <View>
      <Text style={styles.totalPrice}>{getTotalCost(products)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalPrice: {
    fontSize: 24,
  },
});
