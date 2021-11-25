import React from "react";

import { namesScreens } from "../navigation/namesScreens";

import { productListScreen } from "../screens/productListScreen";
import { productInfoScreen } from "../screens/productInfoScreen";
import { addNewProductScreen } from "../screens/addNewProduct";
import { test } from "../screens/test";

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
          name={namesScreens.addNewProductScreen}
          component={addNewProductScreen}
          options={{ title: "Add Product" }}
        />
        <Stack.Screen
          name={namesScreens.test}
          component={test}
          options={{ title: "screen for tests" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
