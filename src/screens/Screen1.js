import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export const Screen1 = () => {
  const [click, setClick] = React.useState(0);
  const name1 = "Example 1";
  const [name, setName] = React.useState(name1);
  const name2 = "Expamle 2";
  return (
    <View style={styles.container}>
      <Text>Click № {click}</Text>
      <Button title="Click" onPress={() => setClick(click + 1)} />
      <Text>{name}</Text>
      <Button title="change name" onPress={() => setName(name2)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 100,
  },
});
