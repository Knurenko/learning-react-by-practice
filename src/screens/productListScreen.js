import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ProductS } from "../components/productS";
import { SumPrice } from "../components/sumPrice";
import {namesScreens} from "../navigation/namesScreens"

// callaback прокинуть внутрь ProductS (вместо navigation)

export const productListScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      {/* <SumPrice />  */} 
      <ProductS navigation = {navigation} />
      <View style={styles.button}>
        <Button
          title="Добавить продукт"
          onPress={() => navigation.navigate(namesScreens.addNewProductScreen)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
  }
})