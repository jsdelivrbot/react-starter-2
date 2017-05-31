import { SELECT_ITEM } from "./actions";

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        selectedItem: item
    }
};