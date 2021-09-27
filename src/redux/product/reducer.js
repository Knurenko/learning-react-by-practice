import { productActionTypes } from "./action";
import { productList } from "./productList";

export const productReducer = (state = productList, action) => {
  switch (action.type) {
    case productActionTypes.SET_PRODUCT:
      return { ...state, product: action.payload };

    default:
      return state;
  }
};
