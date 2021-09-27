import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

export const addNewProduct = () => {
  const addNew = (title) => {
    const product = useSelector((state) => state.productsR);
    const dispatch = useDispatch();
    const newProduct = {
      title: "new",
      id: Date.now(),
    };
    dispatch({ type: "ADD_PRODUCT", payload: productsR });
  };
};
