import React from "react";
import { View } from "react-native";
import { ProductS } from "../components/productS";

// callaback прокинуть внутрь ProductS (вместо navigation)

export const productListScreen = ({ navigation }) => {
  return (
    <View>
      <ProductS navigation={navigation} />
    </View>
  );
};
