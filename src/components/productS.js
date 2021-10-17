import React from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet
} from "react-native";

import { useSelector } from "react-redux";


export const ProductS = () => {
  const products = useSelector((state) => state.product);

  const Item = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
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
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
