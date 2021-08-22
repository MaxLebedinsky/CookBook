import {
    CHOOSE_DISH,
} from "./actions"

const initialState = {
    chosenDish: {},
}

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_DISH: {
            return {
                ...state,
                chosenDish: action.chosenDish,
            }
        }
        default:
            return state;
    }
}