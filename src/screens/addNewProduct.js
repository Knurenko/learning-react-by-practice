import React from "react";
import { View, StyleSheet, TextInput, Button, Image, } from "react-native";

import ImagePicker from 'react-native-image-crop-picker';

import { addNewProduct } from "../redux/product/reducer";
import { useDispatch } from "react-redux";

export const addNewProductScreen = ({ navigation: { goBack } }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [picture, setPicture] = React.useState(null);

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

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPicture(image.path);
    });
  } 

  const takePhotoFromLib = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setPicture(image.path);
    });
  }
  

  const newProduct = {
    id: getRandomInt(999999999999),
    title: name,
    description: description,
    price: price,
    photo: picture,
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

        <Image
        style={{height:100, width:100}}
        source={{uri: picture}}
      />
        <Button
          title="PHOTO from camera"
          onPress={takePhotoFromCamera}
        />
        <Button
          title="PHOTO from gallary"
          onPress={takePhotoFromLib}
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
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  },
});
