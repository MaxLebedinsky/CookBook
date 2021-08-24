import { REQUEST_STATUS } from "../../utils/constants";
import {
    ADD_DISH,
    DELETE_DISH,
    DISHES_FAILURE,
    DISHES_LINKS_SUCCESS,
    DISHES_REQUEST,
    DISHES_SUCCESS,
} from "./actions"

const initialState = {
    dishes: [],
    links: [],
    search: "",
    request: {
        status: REQUEST_STATUS.IDLE,
        error: '',
    },
    chosenDish: {},
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
                dishes: action.dishes,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: "",
                }
            }
        }
        case DISHES_LINKS_SUCCESS: {
            return {
                ...state,
                links: action.links,
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
        default:
            return state;
    }
}