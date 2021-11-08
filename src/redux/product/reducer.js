import { productList } from "./productList";

const initialState = productList;

const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const ADD_FAVORITE_PRODUCT = "ADD_FAVORITE_PRODUCT";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      const id = action.payload;
      return [...state.filter((item) => item.id !== id)];
    case ADD_FAVORITE_PRODUCT:
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};

export const addNewProduct = (newProduct) => ({
  type: ADD_NEW_PRODUCT,
  payload: newProduct,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});
