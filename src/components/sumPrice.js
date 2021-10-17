import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const SumPrice = () => {
  const price = useSelector((state) => state.product);

  function prices(item) {
    return item.price;
  }
  function addPrices(pr, price) {
    return pr + price;
  }
  const PriceScores = price.map(prices);

  const ScoresPrice = () => PriceScores.reduce(addPrices, 0);
  const PriceToNum = (ScoresPrice) => ScoresPrice - 0;

  return (
    <View>
      <Text>
        <PriceToNum />
      </Text>
    </View>
  );
};
