import { productList } from "./productList";
import { addNewProductScreen } from "../../screens/addNewProduct";

const initialState = productList;

const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      const id = action.payload;
      return [...state.filter((item) => item.id !== id)];

    default:
      return state;
  }
};

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

export const addNewProduct = (newProduct) => ({
  type: ADD_NEW_PRODUCT,
  payload: newProduct,
  // id: getRandomInt(999999999999),
  // title: getRandomInt(999999999999),
  // date() уникальный id
});

export const deleteProduct = () => ({
  type: DELETE_PRODUCT,
  payload: 1,
});
