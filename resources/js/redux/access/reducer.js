import {IS_LOGIN, IS_LOGOUT, LOGGED_USER_DATA} from "./actions"

const initialState = {
    loginStatus: false,
    userData: {},
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN: {
            return {
                ...state,
                loginStatus: action.isLoginStatus
            };
        }
        case IS_LOGOUT: {
            return {
                ...state,
                loginStatus: action.isLoginStatus
            }
        }
        case LOGGED_USER_DATA: {
            return {
                ...state,
                userData: action.userData,
            }
        }
        default:
            return state;
    }
}