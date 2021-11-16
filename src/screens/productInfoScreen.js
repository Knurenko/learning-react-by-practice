import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

export const productInfoScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.itemTitle}</Text>
        <Card>
          <Card.Cover
            style={styles.itemPhoto}
            source={{ uri: item.itemPhoto }}
          />
        </Card>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.itemPrice}>
          Price:<Text>{item.itemPrice} $</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  item: {},
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
  },
  itemDescription: {},
  itemPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gold",
  },
  itemPhoto: {
    height: 300,
  },
});
