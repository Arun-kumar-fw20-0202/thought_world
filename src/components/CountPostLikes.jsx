import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLikes } from '../redux/likes/action.like'

export const CountPostLikes = ({manageLike, postId, removeLike}) => {
    const dispatch = useDispatch()
    const {likes,isAuth,activeUser} = useSelector((store) => {
        return {
            likes: store.LikeReducer.likes,
            isAuth: store.Loginreducer.isAuth,
            activeUser: store.Loginreducer.activeUser
        }
    },shallowEqual)

    let check = false;
    let totalLikes = 0;
    let id;
    likes.map((ele) => {
        ele.postId == postId && ele.likedUserId == activeUser.id ? check = true: ""; 
        ele.postId == postId? totalLikes++ : 0;
        ele.postId == postId? id = ele.id : 0;

    })

    useEffect(() => {
        dispatch(LoadLikes)
    },[])
    
  return (
    <>
        {isAuth ?  
         check ? 
            <Link style={{color: "red"}} onClick={(e)=>removeLike(postId, activeUser.id,e)} >
                <i className='fa fa-heart'></i>
                <br />
                <span style={{fontSize: "10px"}}><small>Likes</small> {totalLikes}</span>
            </Link>
            :
            <Link onClick={(e) => manageLike(e)}>
                <i className='fa fa-heart-o'></i>
                <br />
                <span style={{fontSize: "10px"}}><small>Likes</small> {totalLikes}</span>
            </Link>
            :
            <Link onClick={() => alert("Please Login first")}>
                <i className='fa fa-heart-o'></i>
                <br />
                <span style={{fontSize: "10px"}}><small>Likes</small> {totalLikes}</span>
            </Link>
        }
    </>
  )
}
