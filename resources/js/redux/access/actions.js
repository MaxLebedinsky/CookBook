export const IS_LOGIN = 'LOGIN::IS_LOGIN';
export const IS_LOGOUT = 'LOGIN::IS_LOGOUT';
export const LOGGED_USER_DATA = 'LOGIN::USER_DATA';

export const isLogin = (isLoginStatus) => ({
    type: IS_LOGIN,
    isLoginStatus,
});

export const isLogout = (isLoginStatus) => ({
    type: IS_LOGOUT,
    isLoginStatus,
});

export const loggedUserData = (userData) => (
    {
        type: LOGGED_USER_DATA,
        userData,
    }
);


