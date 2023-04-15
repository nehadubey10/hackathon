import * as types from "./actionTypes";

const initState = {
    loading: false,
    isAuthenticated: false,
    token: "",
    email: "",
    error: false
};

export const loginReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case types.LOGIN_LOADING:
            return {
                ...store,
                loading: true,
                error: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...store,
                loading: false,
                isAuthenticated: true,
                token: payload.token,
                email: payload.email,
                error: false
            };
        case types.LOGIN_FAILURE:
            return {
                ...store,
                loading: false,
                isAuthenticated: false,
                token: "",
                email: "",
                error: true
            };
        case types.LOGOUT:
            return { ...initState }
        default:
            return store;
    }
};
