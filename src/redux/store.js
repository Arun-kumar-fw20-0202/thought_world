import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AddPostreducer } from "./addPostReducer/reducer.addPost";
import { reducer } from "./registration/reducer";
import { Loginreducer } from "./loginReducer/reducer.login.js"
import { LikeReducer } from "./likes/reducer.like.js"

const rootReducer = combineReducers({reducer,AddPostreducer,Loginreducer,LikeReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))