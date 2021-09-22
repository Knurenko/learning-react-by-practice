import { createStore } from "redux";
import { combineReducers } from "redux";

import { productList } from "../redux/reducers/productList";

const allReducers = combineReducers({
  productsR: productList,
});

export const store = createStore(allReducers);
