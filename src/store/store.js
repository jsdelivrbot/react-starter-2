import { createStore } from "redux";

import RootReducer from "../reducers/index";
import initialState from "./initial-state";

const store = createStore(
    RootReducer,
    initialState
);

export default store;