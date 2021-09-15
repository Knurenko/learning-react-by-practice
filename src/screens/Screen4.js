import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const Screen4 = ({ navigation }) => {
  const [txt4, setTxt4] = React.useState(null);
  const onChangeText = (text) => {
    setTxt4(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={txt4}
        placeholder="Введите текст для возврата в Screen3"
        onChangeText={onChangeText}
      />
      <Button
        title="Вернуть в Screen3"
        onPress={() => navigation.navigate("Screen3", { txt: txt4 })}
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
