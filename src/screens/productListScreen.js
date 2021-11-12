import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";

import { Button, Surface, IconButton, Colors, Card } from "react-native-paper";
import { SumPrice } from "../components/sumPrice";
import { namesScreens } from "../navigation/namesScreens";
import { deleteProduct } from "../redux/product/reducer";
import { setFavorite } from "../redux/product/reducer";

import { useSelector, useDispatch } from "react-redux";

export const productListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate(namesScreens.productInfoScreen, {
            item: item,
          });
        }}
      >
        <View>
          <Surface style={styles.surface}>
            <Card>
              <Card.Cover style={styles.photo} source={{ uri: item.photo }} />
            </Card>
            <View style={styles.centerItem}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textPrice}>{item.price}$</Text>
            </View>
            <View style={styles.rightItem}>
              <IconButton
                style={styles.iconButtonFavorite}
                icon="heart"
                color={Colors.blue50}
                size={20}
                onPress={() => dispatch(setFavorite(item.id))}
              />
              <IconButton
                icon="delete"
                color={Colors.red500}
                size={20}
                onPress={() => dispatch(deleteProduct(item.id))}
              />
            </View>
          </Surface>
        </View>
      </TouchableOpacity>
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
            renderItem={renderItem}
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
  button: {},
  sumPrice: {},
  rightItem: {},
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
