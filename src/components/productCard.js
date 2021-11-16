import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { Surface, IconButton, Colors, Card } from "react-native-paper";
import { namesScreens } from "../navigation/namesScreens";

export const ProductCard = (props) => {
  const itemID = props.itemID;
  const itemTitle = props.itemTitle;
  const itemPrice = props.itemPrice;
  const itemPhoto = props.itemPhoto;
  const itemFavorite = props.itemFavorite;
  const itemDescription = props.itemDescription;

  const onPressFavorite = props.onPressFavorite;

  const itemRoute = {
    itemID,
    itemTitle,
    itemPrice,
    itemPhoto,
    itemFavorite,
    itemDescription,
  };

  const navigation = props.navigation;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate(namesScreens.productInfoScreen, {
          item: itemRoute,
        });
      }}
    >
      <View>
        <Surface style={styles.surface}>
          <Card>
            <Card.Cover style={styles.photo} source={{ uri: itemPhoto }} />
          </Card>
          <View style={styles.centerItem}>
            <Text style={styles.textTitle}>{itemTitle}</Text>
            <Text style={styles.textPrice}>{itemPrice}$</Text>
          </View>
          <View style={styles.rightItem}>
            <IconButton
              style={styles.iconButtonFavorite}
              icon="heart"
              color={itemFavorite === true ? Colors.orange400 : Colors.blue200}
              size={20}
              onPress={() => onPressFavorite}
            />
            {/* <IconButton
              icon="delete"
              color={Colors.red500}
              size={20}
              onPress={() => dispatch(deleteProduct(item.id))}
            /> */}
          </View>
        </Surface>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  photo: {
    margin: 10,
    height: 130,
    width: 130,
    borderRadius: 20,
  },
});
