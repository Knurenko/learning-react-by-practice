import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import { useSelector } from "react-redux";

export const ProductS = () => {
  const products = useSelector((state) => state.product);

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
