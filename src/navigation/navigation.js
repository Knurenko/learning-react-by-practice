import React from "react";

import { namesScreens } from "../navigation/namesScreens";

import { productListScreen } from "../screens/productListScreen";
import { productInfoScreen } from "../screens/productInfoScreen";
import { addNewProduct } from "../screens/addNewProduct";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={namesScreens.productListScreen}
          component={productListScreen}
          options={{ title: "Product List" }}
        />
        <Stack.Screen
          name={namesScreens.productInfoScreen}
          component={productInfoScreen}
          options={{ title: "Product Information" }}
        />
        <Stack.Screen
          name={namesScreens.addNewProduct}
          component={addNewProduct}
          options={{ title: "Add Product" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
