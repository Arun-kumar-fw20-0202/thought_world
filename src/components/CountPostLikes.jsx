import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLikes } from '../redux/likes/action.like'

export const CountPostLikes = ({manageLike, postId, removeLike}) => {
    const dispatch = useDispatch()
    const {likes,isAuth} = useSelector((store) => {
        return {
            likes: store.LikeReducer.likes,
            isAuth: store.Loginreducer.isAuth
        }
    },shallowEqual)

    let check = false;
    let totalLikes = 0;
    let id;
    likes.map((ele) => {
        ele.postId == postId ? check = true: ""; 
        ele.postId == postId? totalLikes++ : 0;
        ele.postId == postId? id = ele.id : 0;

    })

    console.log(likes)

    useEffect(() => {
        dispatch(LoadLikes)
    },[])
    
  return (
    <>
        {check ? 
            <Link style={{color: "red"}} onClick={() => removeLike(id)} >
                <i className='fa fa-heart'></i>
                <br />
                <span style={{fontSize: "10px"}}><small>Likes</small> {totalLikes}</span>
            </Link>
            :
            <Link onClick={(e) => manageLike(e)}>
                <i className='fa fa-heart-o'></i>
                <br />
                <span style={{fontSize: "10px"}}><small>Likes</small> {totalLikes}</span>
            </Link>}
    </>
  )
}
