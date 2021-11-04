import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

export const productInfoScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.title}</Text>
      <Card>
        <Card.Cover source={{ uri: item.photo }} />
      </Card>
      <Text>{item.description}</Text>
      <Text>
        Price:<Text>{item.price} $</Text>
      </Text>
    </View>
  );
};
