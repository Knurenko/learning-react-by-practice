import { combineReducers } from "redux";

import { productReducer } from "./product/reducer";

export const reducers = combineReducers({
  product: productReducer,
});
