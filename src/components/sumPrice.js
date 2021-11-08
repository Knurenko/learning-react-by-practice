import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const SumPrice = () => {
  const price = useSelector((state) => state.product);

  function prices(item) {
    return +item.price;
  }
  function addPrices(pr, price) {
    return pr + price;
  }
  const PriceScores = price.map(prices);

  const ScoresPrice = () => PriceScores.reduce(addPrices, 0);

  return (
    <View>
      <Text style={styles.totalPrice}>
        Total price:
        <ScoresPrice /> $
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalPrice: {
    fontSize: 24,
  },
});
