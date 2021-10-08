import React from "react";
import { View, Button } from "react-native";
import { ProductS } from "../components/productS";
import { sumPrice } from "../components/sumPrice";

// callaback прокинуть внутрь ProductS (вместо navigation)

export const productListScreen = ({ navigation }) => {
  return (
    <View>
      {/* <sumPrice /> */}
      <ProductS />
      <Button
        title="Добавить продукт"
        onPress={() => navigation.navigate("addNew")}
      />
    </View>
  );
};
