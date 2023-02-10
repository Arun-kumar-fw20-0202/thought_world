import axios from "axios"
import { ADD_USER_ERROR, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "../actionType"


export const addUserRequest = () => {
    return { type: ADD_USER_REQUEST }
}

export const addUserSuccess = (payload) => {
    return { type: ADD_USER_SUCCESS, payload }
}
export const addUserError = () => {
    return { type: ADD_USER_ERROR }
}


export const userRegistration = (userData) => (dispatch) => {
    dispatch(addUserRequest())
    // console.log(userData)
    axios.post('http://localhost:8080/users',userData).then((res) => {
        console.log(res)
        dispatch(addUserSuccess(res.data))
    })
    .catch((err) => {
        dispatch(addUserError())
    })
}