import axios from "axios"
import { ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../actionType"


export const addPostRequest =  () => {
    return {type: ADD_POST_REQUEST }
}

export const addPostSuccess = (payload) => {
    return { type: ADD_POST_SUCCESS, payload }
}

export const addPostError = () => {
    return { type: ADD_POST_ERROR }
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