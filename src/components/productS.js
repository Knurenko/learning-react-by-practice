import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ProductS = ({ navigation }) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const addNew = () => {
  //   const newProduct = {
  //     title: "4",
  //     id: 4,
  //   };
  //   dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  // };

  const Item = ({ item }) => (
    <TouchableOpacity
    // onPress={() => navigation.navigate("ProductInfo")}   FIX IT --- DON'T WORK!!! (it's for Nykaloff)
    >
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
      {/* <Button title="Добавить продукт" onPress={() => addNew()} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
