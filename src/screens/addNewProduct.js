import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";

import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";

import { addNewProduct } from "../redux/product/reducer";
import { useDispatch } from "react-redux";

export const addNewProductScreen = ({ navigation: { goBack } }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [photo, setPhoto] = React.useState(
    "https://cdn-icons.flaticon.com/png/128/2914/premium/2914140.png?token=exp=1635632478~hmac=41d5fadfeb848dbbddfa86dbe2e13960"
  );

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
    }).then((image) => {
      setPhoto(image.path);
    });
  };

  // выбрать фото из галереии
  const takePhotoFromLib = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
    }).then((image) => {
      setPhoto(image.path);
    });
  };

  // новый продукт который диспатчим
  const newProduct = {
    id: getRandomInt(999999999999),
    title: name,
    description: description,
    price: price,
    photo: photo,
  };

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Title product"
        placeholder="Type title"
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Description"
        placeholder="Type description"
        onChangeText={onChangeDescription}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Price"
        placeholder="Type price"
        onChangeText={onChangePrice}
        keyboardType="phone-pad"
      />

      <Image style={styles.image} source={{ uri: photo }} />

      <Button
        mode="outlined"
        icon="camera"
        onPress={toggleModal}
        style={styles.button}
      >
        take Photo
      </Button>
      <Modal
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={styles.modal}
        isVisible={isModalVisible}
      >
        <View>
          <Button
            mode="contained"
            icon="camera"
            onPress={takePhotoFromCamera}
            style={styles.button}
          >
            from camera
          </Button>
          <Button
            mode="contained"
            icon="camera"
            onPress={takePhotoFromLib}
            style={styles.button}
          >
            from galary
          </Button>

          <Button mode="contained" onPress={toggleModal} style={styles.button}>
            close
          </Button>
        </View>
      </Modal>

      <Button
        mode="contained"
        onPress={() => {
          dispatch(addNewProduct(newProduct)), goBack();
        }}
        style={styles.button}
      >
        ADD PRODUCT
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  textInput: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 15,
    marginLeft: 90,
    marginTop: 15,
  },
  button: {
    margin: 10,
  },
});
