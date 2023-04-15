
import axios from "axios"
import * as types from "./actionTypes"

export const loginLoading = () => ({
    type: types.LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = () => ({
    type: types.LOGIN_FAILURE
});



export const loginUser = (cred) => (dispatch) => {
    dispatch(loginLoading())
    axios.post('https://a7ba-103-131-25-173.ngrok-free.app/user/login', cred)
        .then((response) => {dispatch(loginSuccess({ email: cred.email, token: response.data.token }));  localStorage.setItem('userEmail', JSON.stringify(cred.email));
    })
        .catch((err) => {dispatch(loginFailure(alert("Invalid Details")));console.log(err.message)})
}

export const logout = () => ({
    type: types.LOGOUT
})
