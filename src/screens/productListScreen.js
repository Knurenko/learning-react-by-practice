import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import { Button, Surface, Avatar } from "react-native-paper";
import { SumPrice } from "../components/sumPrice";
import { namesScreens } from "../navigation/namesScreens";

import { useSelector } from "react-redux";

export const productListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.product);

  const Item = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate(namesScreens.productInfoScreen, { item: item });
      }}
    >
      <View>
        <Surface style={styles.surface}>
          <Image size={40} source={item.photo} />
          <Text>{item.title}</Text>
        </Surface>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View>
      <SafeAreaView>
        <SumPrice />
        <ScrollView>
          <View style={{ alignItems: "center", marginTop: 1 }}>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
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
  item: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "pink",
  },
  surface: {
    padding: 8,
    height: 100,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
});
