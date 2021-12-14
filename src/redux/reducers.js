import { combineReducers } from "redux";

import { productReducer } from "./product/reducer";
import { asyncReducer } from "./testAsync/asyncReducer";

export const reducers = combineReducers({
  product: productReducer,
  async: asyncReducer,
});
