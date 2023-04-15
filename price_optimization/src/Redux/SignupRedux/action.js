
import * as types from "./actionTypes"

export const singLoading = () => ({
    type: types.SIGN_LOADING
});

export const signSuccess = (payload) => ({
    type: types.SIGN_SUCCESS,
    payload
});

export const singError = () => ({
    type: types.SIGN_ERROR
});

export const Register = (user_name, email,mobile, password) => (dispatch) => {
    dispatch(singLoading());
    fetch("https://a7ba-103-131-25-173.ngrok-free.app/user/create/user", {
        method: "POST",
        body: JSON.stringify(user_name,email,mobile,password),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((res) => {
            console.log("res")
            dispatch(signSuccess(user_name, email,mobile, password))

        })
        .catch((err) => dispatch(singError()))
}

