import axios from "axios"
import { GET_LIKES, GIVE_LIKE, REMOVE_LIKES } from "../actionType"

export const getLikes = (payload) => {
    return {type: GET_LIKES, payload}
}
export const handleAddLike = (payload) => {
    return {type: GIVE_LIKE, payload}
}
export const handleRemoveLike = (payload) => {
    return {type: REMOVE_LIKES, payload}
}


export const addLike = (data) => (dispatch) => {
    axios.post('http://localhost:8080/likes',data).then((res) => {
        dispatch(handleAddLike(res.data))
    }).catch((err) => {
        console.log(err)
    })
}

export const LoadLikes = (dispatch) => {
    axios.get('http://localhost:8080/likes').then((res) => {
        dispatch(getLikes(res.data))
    }).catch((err) => {
        console.log(err)
    })
}

export const DeleteLike = (deleteId) => async (dispatch) => {
    
    try {
        const res = await fetch(`http://localhost:8080/likes/?id=1&id=${deleteId}`)
        let data = await res.json();
        console.log(data)

    } catch (e) {
        console.log(e)
    }    

    dispatch(handleRemoveLike(deleteId))
}