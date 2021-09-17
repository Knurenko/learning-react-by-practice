import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const Product = (props) => {
  return props.products.map((products) => {
    return <Text key={products.id}>{products.title}</Text>;
  });
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(Product);
