import React from "react";
import { SafeAreaView, Text } from "react-native";

export const Resultinput = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.value}</Text>
    </SafeAreaView>
  );
};
