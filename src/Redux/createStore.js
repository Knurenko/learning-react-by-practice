import React from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store1 = createStore(reducer);
