import React from "react";

import { productListScreen } from "../screens/productListScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={productListScreen}
          options={{ title: "Product List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
