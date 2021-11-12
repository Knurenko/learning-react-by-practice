import { productList } from "./productList";

const initialState = productList;

const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const SET_FAVORITE_PRODUCT = "SET_FAVORITE_PRODUCT";

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT: {
      return [...state, action.payload];
    }
    case DELETE_PRODUCT: {
      const id = action.payload;
      return [...state.filter((item) => item.id !== id)];
    }
    case SET_FAVORITE_PRODUCT: {
      const id = action.payload;
      const checkFavorite = (item, id) => {
        return item.id === id ? { ...item, favorite: !item.favorite } : item;
      };
      const updatedArray = state.map((item) => checkFavorite(item, id));
      return [...updatedArray];
    }

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

export const setFavorite = (id) => ({
  type: SET_FAVORITE_PRODUCT,
  payload: id,
});
