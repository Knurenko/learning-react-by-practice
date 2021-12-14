import { asyncTest } from "../asyncReducer";

export const fetchTest = () => {
  return function (dispatch) {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => dispatch(asyncTest(json)));
  };
};
