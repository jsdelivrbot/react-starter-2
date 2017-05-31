import { SELECT_ITEM } from "../action-creators/actions";

const selectedItemReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return action.selectedItem;
        default:
            return state;
    }
};

export default selectedItemReducer;