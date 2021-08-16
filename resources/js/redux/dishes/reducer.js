import {REQUEST_STATUS} from "../../utils/constants";
import {
    ADD_DISH,
    CHOOSE_DISH,
    DELETE_DISH,
    DISHES_FAILURE,
    DISHES_REQUEST,
    DISHES_SEARCH_FIELD,
    DISHES_SUCCESS,
} from "./actions"

const initialState = {
    dishList: [],
    search: "",
    request: {
        status: REQUEST_STATUS.IDLE,
        error: '',
    },
    chosenDish: {}
}

export const dishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_REQUEST: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.PENDING,
                    error: "",
                }
            };
        }
        case DISHES_FAILURE: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.FAILURE,
                    error: action.error,
                }
            }
        }
        case DISHES_SUCCESS: {
            return {
                ...state,
                dishList: action.dishes,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: "",
                }
            }
        }
        case ADD_DISH: {
            return {
                ...state,
                dishList: [...state.dishList, action.payload]
            }
        }
        case DELETE_DISH: {
            const dishIndex = [...state.dishList].findIndex(dish => dish.dish.id === action.payload);

            const newDishList = [...state.dishList];
            newDishList.splice(dishIndex, 1);

            return {
                ...state,
                dishList: newDishList,
            }
        }
        case DISHES_SEARCH_FIELD: {
            return {
                ...state,
                search: action.search,
            }
        }
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