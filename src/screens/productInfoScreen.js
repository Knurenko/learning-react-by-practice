import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const productInfoScreen = ({ navigation, route }) => {

  // const products = useSelector((state) => state.product);

  // const { item } = route.params;
  return (

  <View>
    <Text>Product:</Text>
    <Text>Discription:</Text>
    <Text>Price:</Text>
    <Text>Photo</Text>
  </View>
  )
};
