import { combineReducers } from "redux";

import itemsReducer from "./items-reducer";
import selectedItemReducer from "./selected-item-reducer";

const RootReducer = combineReducers({
    items: itemsReducer,
    selectedItem: selectedItemReducer
});

export default RootReducer;
