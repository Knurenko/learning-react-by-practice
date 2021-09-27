import React from "react";
import { View, Button } from "react-native";
import { ProductS } from "../components/productS";

export const productListScreen = ({ navigation }) => {
  return (
    <View>
      <ProductS />
      {/* <Button
        title="Добавить продукт"
        onPress={() => navigation.navigate("addNew")}
      /> */}
    </View>
  );
};
