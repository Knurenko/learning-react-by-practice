import React from "react";
import { View, Button } from "react-native";
import { ProductS } from "../components/productS";
import { SumPrice } from "../components/sumPrice";

// callaback прокинуть внутрь ProductS (вместо navigation)

export const productListScreen = ({ navigation }) => {
  return (
    <View>
      <SumPrice />
      <ProductS />
      <View>
        <Button
          title="Добавить продукт"
          onPress={() => navigation.navigate("addNewProduct")}
        />
      </View>
    </View>
  );
};
