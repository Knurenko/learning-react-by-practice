export const defaultState = {
  cash: 0,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cash: state.cash + action.payload };

    case "GET":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};
