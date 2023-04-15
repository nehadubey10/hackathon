import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"

import { signupReducer } from "./SignupRedux/reducer";
import { loginReducer } from "./LoginRedux/reducer";

const rootReducer = combineReducers({
    sign: signupReducer,
    login: loginReducer

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

