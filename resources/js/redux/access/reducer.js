import {IS_LOGIN, IS_LOGOUT} from "./actions"

const initialState = {
    loginStatus: false,
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
        default:
            return state;
    }
}