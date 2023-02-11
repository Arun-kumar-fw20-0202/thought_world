import { ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS, GET_POST_ERROR, GET_POST_REQUEST, GET_POST_SUCCESS } from "../actionType"

const initialState = {
posts: [],
isLoading: false,
isError: false,
}

export const AddPostreducer = (state= initialState, {type, payload}) =>{

switch(type){
    case ADD_POST_REQUEST: return {...state, isLoading: state.isLoading = true}
    case ADD_POST_SUCCESS : return {...state, isLoading: state.isLoading = false, posts: state.posts = payload}
    case ADD_POST_ERROR : return {...state, isLoading: state.isLoading = false, isError: state.isError = true}

    case GET_POST_REQUEST : return {...state, isLoading: state.isLoading = true}
    case GET_POST_SUCCESS : return {...state, isLoading: state.isLoading = false, posts: state.posts = payload}
    case GET_POST_ERROR : return {...state, isLoading: state.isLoading = false, isError: state.isError = true}

    default: return state
}
}