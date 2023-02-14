import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CountPostLikes } from './CountPostLikes'
import { LoadSaved } from './LoadSaved'

export const LoadPost = ({userId,imageUrl,title,privatePost,id}) => {

    const dispatch = useDispatch()
    const {activeUser, users} = useSelector((store) => {
        return {
            users: store.reducer.users,
            activeUser: store.Loginreducer.activeUser,
        }
    },shallowEqual)


  return (
    <>
        {privatePost ? "" : 
            <div className="card">
                <div className="head">
                {users.map((ele,i) => (
                    <span key={i}>
                        <img src={userId == ele.id ? ele.avatar: ""} alt="" />
                        <span className="username">{userId == ele.id ? "ele.name" : ""}</span>
                    </span>
                ))}
                </div>
                <div className="content">
                    <img src={imageUrl} width="120px" alt="" />
                    {/* <video controls={true} poster={imageUrl}> */}
                        {/* <source src={imageUrl} /> */}
                    {/* </video>  */}
                </div>
                <div className="likes">
                    <CountPostLikes postId={id} />
                    {/*  */}
                    <LoadSaved postId={id} />
                    {/*  */}
                    <Link><i className='fa fa-send'></i></Link>
                </div>
                <span>{title}</span>

                <div className="comment">
                    <input placeholder='comment...' type="text" />
                    <button>send</button>
                </div>
            </div>
        }
    </>
  )
}
