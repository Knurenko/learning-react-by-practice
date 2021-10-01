import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

import { addNewProduct } from "../redux/product/reducer";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ProductS = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const Item = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button
        title="Добавить продукт"
        onPress={() => dispatch(addNewProduct())}
      />
    </SafeAreaView>
  );
};
