const initialState = [];

const ASYNC_TEST = "ASYNC_TEST";

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_TEST: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const asyncTest = (payload) => ({
  type: ASYNC_TEST,
  payload,
});
