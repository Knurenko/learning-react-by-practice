import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { Button } from "react-native-paper";
import { SumPrice } from "../components/sumPrice";
import { namesScreens } from "../navigation/namesScreens";
import { setFavorite } from "../redux/product/reducer";

import { ProductCard } from "../components/productCard";

import { useSelector, useDispatch } from "react-redux";

export const productListScreen = (props) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const updateFavorite = (itemID) => {
    dispatch(setFavorite(itemID));
  };
  const navigation = props.navigation;

  const productCardItem = ({ item }) => {
    return (
      <ProductCard
        itemID={item.id}
        itemTitle={item.title}
        itemDescription={item.description}
        itemPrice={item.price}
        itemPhoto={item.photo}
        itemFavorite={item.favorite}
        navigation={navigation}
        onPressFavorite={updateFavorite}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.sumprice}>
          <SumPrice />
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={productCardItem}
          />
        </View>
      </SafeAreaView>
      <View style={styles.buttonAddNew}>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate(namesScreens.addNewProductScreen);
          }}
        >
          Add new Product
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate(namesScreens.test);
          }}
        >
          go to screen for tests
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  sumprice: {
    flex: 0.04,
  },
  flatlist: {
    flex: 0.8,
  },
  buttonAddNew: {
    flex: 0.4,
    padding: 10,
  },
});
