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
    <View>
      <SafeAreaView>
        <View style={styles.sumPrie}>
          <SumPrice />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={productCardItem}
          />
        </View>
      </SafeAreaView>
      <View style={styles.button}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            navigation.navigate(namesScreens.addNewProductScreen);
          }}
        >
          Add new Product
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonFavorite: {
    marginBottom: 40,
  },
  item: {
    marginTop: 10,
  },
  textTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  textPrice: {
    fontSize: 24,
    marginBottom: 5,
    color: "gold",
  },
  surface: {
    flex: 1,
    height: 150,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  centerItem: {
    flexDirection: "column",
    alignItems: "center",
  },
  flatList: {
    alignItems: "center",
    marginTop: 2,
    height: 710,
  },
  photo: {
    margin: 10,
    height: 130,
    width: 130,
    borderRadius: 20,
  },
});
