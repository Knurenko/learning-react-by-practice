import { productList } from "./productList";

const initialState = productList;

const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state; // как удалить эл. массива
    default:
      return state;
  }
};

export const addNewProduct = () => ({
  type: ADD_NEW_PRODUCT,
  payload: { id: "4", title: "4" }, // date() уникальный id
});

export const deleteProduct = () => ({
  type: DELETE_PRODUCT,
  payload: {},
});
