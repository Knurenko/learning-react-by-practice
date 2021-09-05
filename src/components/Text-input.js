import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { ResultChecker } from "./ResultChecker";

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
      <ResultChecker value={number} />
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
