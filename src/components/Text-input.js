import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { Resultinput } from "./Resultinput";

export const InputPlace = () => {
  const [number, setNumber] = React.useState(null);
  const onChangeText = (text) => {
    setNumber(text);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={number}
        placeholder="Enter your number"
        onChangeText={onChangeText}
      />
      <Resultinput value={number} />
    </SafeAreaView>
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
