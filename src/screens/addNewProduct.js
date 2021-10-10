import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

import { addNewProduct } from "../redux/product/reducer";
import { useDispatch } from "react-redux";

export const addNewProductScreen = ({ navigation: { goBack } }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(null);

  const onChangeName = (text) => {
    setName(text);
  };
  const onChangeDescription = (text) => {
    setDescription(text);
  };
  const onChangePrice = (number) => {
    setPrice(number);
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const newProduct = {
    id: getRandomInt(999999999999),
    title: name,
    description: description,
    price: price,
  };

  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Введите название продукта"
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Введите описание продукта"
        onChangeText={onChangeDescription}
      />
      <TextInput
        style={styles.input}
        value={price}
        placeholder="Введите цену"
        onChangeText={onChangePrice}
        keyboardType="numeric"
      />
      <Button
        title="Добавить продукт"
        onPress={() => {
          dispatch(addNewProduct(newProduct)), goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
  },
});
