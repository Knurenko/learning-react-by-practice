import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";


export const productInfoScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
  <View style={styles.container}>
    <Text style={styles.title}>{item.title}</Text>
    <Image
        style={styles.photo}
        source={{uri: item.photo}}
      />
    <Text>{item.description}</Text>
    <Text style={styles.price}>Price:<Text style={styles.priceNumber}>{item.price} $</Text></Text>
  </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "pink",
    },
    title: {
      fontSize: 42,
      textAlign: "center",
      margin: 10,
      color: "blue"
    },
    price: {
      fontSize: 30,
      margin: 10,
      color: "gold"
    },
    priceNumber: {
      fontSize: 42,
      color: "gold",
    },
    photo: {
      height:200,
      width:200,
      borderRadius:15,
    },
})
;
