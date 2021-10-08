import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import { addNewProduct, deleteProduct } from "../redux/product/reducer";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ProductS = ({ navigation }) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.item}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        {/* <Button
          title="Удалить продукт №1"
          onPress={() => dispatch(deleteProduct())}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 27,
    padding: 5,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
