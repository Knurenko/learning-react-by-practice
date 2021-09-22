export const productsInfo = (productsR) => {
  return {
    type: "PRODUCT_SELECTED",
    payload: productsR,
  };
};
