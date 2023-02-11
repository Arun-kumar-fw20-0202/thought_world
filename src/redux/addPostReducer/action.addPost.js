import axios from "axios"
import { ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS, GET_POST_ERROR, GET_POST_REQUEST, GET_POST_SUCCESS } from "../actionType"


export const addPostRequest =  () => {
    return {type: ADD_POST_REQUEST }
}

export const addPostSuccess = (payload) => {
    return { type: ADD_POST_SUCCESS, payload }
}

export const addPostError = () => {
    return { type: ADD_POST_ERROR }
}

export const getPostRequest = () => {
    return {type: GET_POST_REQUEST}
}
export const getPostSuccess = (payload) => {
    return {type: GET_POST_SUCCESS, payload}
}
export const getPostError = () => {
    return {type: GET_POST_ERROR}
}

// 
export const handleAddPost = (data) => (dispatch) => {
    dispatch(addPostRequest())
    axios.post("http://localhost:8080/posts",data).then((res) => {
        dispatch(addPostSuccess(res.data))
    }).catch((err) => {
        dispatch(addPostError())
    })
}

export const handleGetPost = (dispatch) => {
    dispatch(getPostRequest)
    axios.get('http://localhost:8080/posts').then((res) => {
        dispatch(getPostSuccess(res.data))
    })
    .catch((err)=> {
        getPostError()
    })
}