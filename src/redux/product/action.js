export const productActionTypes = {
  SET_PRODUCT: "SET_PRODUCT",
};

export const productAction = {
  setProduct: (payload) => ({
    type: productActionTypes.SET_PRODUCT,
    payload: payload,
  }),
};
