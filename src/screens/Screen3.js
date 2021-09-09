import React from "react";
import { View, Text, Button } from "react-native";

export const Screen3 = ({ navigation, route }) => {
  const txtFrom4 = route.params?.txt;
  return (
    <View>
      <Button title="Screen4" onPress={() => navigation.navigate("Screen4")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>{txtFrom4}</Text>
    </View>
  );
};
