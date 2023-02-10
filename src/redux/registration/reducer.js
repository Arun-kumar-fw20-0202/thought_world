
import {   
        ADD_USER_ERROR, 
        ADD_USER_REQUEST, 
        ADD_USER_SUCCESS, 
    } from "../actionType"


const initialState = {
    users: [],
    isLoading: false,
    isError: false,
}

export const reducer = (state= initialState, {type, payload}) =>{

    switch(type){
        case ADD_USER_REQUEST : return {...state, isLoading: state.isLoading= true}
        case ADD_USER_SUCCESS : return {...state, isLoading: state.isLoading= false, userData: state.userData = payload}
        case ADD_USER_ERROR : return {...state, isLoading: state.isLoading = false, isError: state.isError = true}
        default: return state
    }
}