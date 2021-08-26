import React from "react";
import { Home } from "../screens/Home";
import { Screen1 } from "../screens/Screen1";
import { Screen2 } from "../screens/Screen2";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: "Screen1" }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: "Screen2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
