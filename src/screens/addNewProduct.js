import React from "react";
import { View, StyleSheet, TextInput, Button, Image, Text } from "react-native";

import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";


import { addNewProduct } from "../redux/product/reducer";
import { useDispatch } from "react-redux";

export const addNewProductScreen = ({ navigation: { goBack } }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [picture, setPicture] = React.useState(null);

  //модальное окно 
  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const onChangeName = (text) => {
    setName(text);
  };
  const onChangeDescription = (text) => {
    setDescription(text);
  };
  const onChangePrice = (number) => {
    setPrice(number);
  };

  // рандомный id
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // сделать фото с камеры
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPicture(image.path);
    });
  } 

  // выбрать фото из галереии 
  const takePhotoFromLib = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true
    }).then(image => {
      console.log(image);
      setPicture(image.path);
    });
  }
  
// новый продукт который диспатчим
  const newProduct = {
    id: getRandomInt(999999999999),
    title: name,
    description: description,
    price: price,
    photo: picture,
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
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
        style={{height:150, width:150}}
        source={{uri: picture}}
      />
        <Button title="Add photo" onPress={toggleModal} /> 
        <Modal 
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.modal}
        isVisible={isModalVisible}>
        <View>
          <Button
          title="Photo from camera"
          onPress={takePhotoFromCamera}
        />
        <Button
          title="Photo from gallary"
          onPress={takePhotoFromLib, toggleModal}
        />

          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
      
        

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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "pink",
  },
  input: {
    height: 50,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
