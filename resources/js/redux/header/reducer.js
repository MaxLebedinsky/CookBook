import {IS_HEADER_BIG, IS_HEADER_SMALL} from "./actions"

const initialState = {
    headerStatus: true,
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_HEADER_BIG: {
            return {
                ...state,
                headerStatus: action.isHeaderStatus
            };
        }
        case IS_HEADER_SMALL: {
            return {
                ...state,
                headerStatus: action.isHeaderStatus
            }
        }
        default:
            return state;
    }
}