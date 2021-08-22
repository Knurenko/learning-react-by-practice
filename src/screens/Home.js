import React from "react";
import { StyleSheet, Button, View, SafeAreaView } from "react-native";

export const Home = (props) => {
  const navigation = props.navigation;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Страница1"
          onPress={() => navigation.navigate("Screen1")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 100,
  },
});
