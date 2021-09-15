import React from "react";
import { Home } from "../screens/Home";
import { Screen1 } from "../screens/Screen1";
import { Screen2 } from "../screens/Screen2";
import { Screen3 } from "../screens/Screen3";
import { Screen4 } from "../screens/Screen4";
import { Screen5 } from "../screens/Screen5";

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
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ title: "Screen3" }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ title: "Screen4" }}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{ title: "Screen5" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
