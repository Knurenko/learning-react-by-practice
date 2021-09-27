import { createStore } from "redux";
import { combineReducers } from "redux";

import { productList } from "../redux/reducers/productList";
import { newProduct } from "../redux/reducers/newProduct";

const allReducers = combineReducers({
  productsR: productList,
  // newProductR: newProduct,
});

export const store = createStore(allReducers);
