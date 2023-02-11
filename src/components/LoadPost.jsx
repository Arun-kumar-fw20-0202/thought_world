import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleGetPost } from '../redux/addPostReducer/action.addPost'
import { addLike, DeleteLike } from '../redux/likes/action.like'
import { fetchUsers } from '../redux/registration/action.register'
import { CountPostLikes } from './CountPostLikes'

export const LoadPost = ({userId,imageUrl,title,privatePost,id}) => {

    const dispatch = useDispatch()
    const {activeUser, users} = useSelector((store) => {
        return {
            users: store.reducer.users,
            activeUser: store.Loginreducer.activeUser
        }
    },shallowEqual)

    const manageLike = (e) => {
        e.preventDefault();
        let userObj = {
            likedUserId: activeUser.id,
            postId : id,
        }
        dispatch(addLike(userObj))
    }

    const removeLike = (likeId) => {
        // alert(likeId)
        dispatch(DeleteLike(likeId))
    }

  useEffect(() => {
    dispatch(fetchUsers)
  },[])
 

  return (
    <>
            <div className="card">
                <div className="head">
                {users.map((ele,i) => (
                    <span key={i}>
                        <img src={userId == ele.id ? ele.avatar: ""} alt="" />
                        <span className="username">{userId == ele.id ? ele.name: ""}</span>
                    </span>
                ))}
                </div>
                <div className="content">
                    <img src={imageUrl} width="120px" alt="" />
                </div>
                <div className="likes">
                   <CountPostLikes manageLike={manageLike} removeLike={removeLike} postId={id} />
                    {/*  */}
                    <Link><i className='fa fa-bookmark-o'></i></Link>
                    {/*  */}
                    <Link><i className='fa fa-send'></i></Link>
                </div>

                <div className="comment">
                    <input placeholder='comment...' type="text" />
                    <button>send</button>
                </div>
            </div>
    </>
  )
}
