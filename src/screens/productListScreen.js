import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import { Button, Surface, IconButton, Colors } from "react-native-paper";
import { SumPrice } from "../components/sumPrice";
import { namesScreens } from "../navigation/namesScreens";
import { deleteProduct } from "../redux/product/reducer";

import { useSelector, useDispatch } from "react-redux";

export const productListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
            <Image size={40} source={{ uri: item.photo }} />
            <View style={styles.centerItem}>
              <Text>{item.title}</Text>
            </View>
            <IconButton
              icon="delete"
              color={Colors.red500}
              size={20}
              onPress={() => dispatch(deleteProduct(item.id))}
            />
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
  item: {
    marginTop: 10,
  },
  surface: {
    height: 150,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  centerItem: {},
  footer: {
    position: "absolute",
    bottom: 0,
  },
  flatList: {
    alignItems: "center",
    marginTop: 2,
    height: 600,
  },
});
