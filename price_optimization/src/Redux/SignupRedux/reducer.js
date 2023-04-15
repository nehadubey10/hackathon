import * as types from "./actionTypes"

const initState = {
    loading: false,
    isAuthention: false,
    user_name: "",
    email: "",
    mobile: "",
    password: "",
    error: false
}

export const signupReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case types.SIGN_LOADING:
            return {
                ...store,
                loading: true,
                error: false
            };
        case types.SIGN_SUCCESS:
            return {
                ...store,
                loading: false,
                user_name: payload.user_name,
                email: payload.email,
                mobile: payload.mobile,
                password: payload.password,
                isAuthention: true,
                error: false
            };
        case types.SIGN_ERROR:
            return {
                ...store,
                loading: false,
                isAuthention: false,
                error: true
            }
        default:
            return store;
    }
}