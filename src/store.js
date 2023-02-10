import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AddPostreducer } from "./redux/addPostReducer/reducer.addPost";
import { reducer } from "./redux/registration/reducer";
import { Loginreducer } from "./redux/loginReducer/reducer.login.js"

const rootReducer = combineReducers({reducer,AddPostreducer,Loginreducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))