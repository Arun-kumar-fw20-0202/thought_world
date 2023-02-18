import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { fetchUsers } from '../redux/registration/action.register'
import { CountPostLikes } from './CountPostLikes'
import { LoadSaved } from './LoadSaved';
import $ from 'jquery';
import { handleDeletePost } from '../redux/addPostReducer/action.addPost'
import { AddComment, getComments } from '../redux/comments/action.comment'

export const LoadPost = ({userId,imageUrl,title,privatePost,id}) => {
    const [comment, setComment] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()


    const {activeUser, users, comments} = useSelector((store) => {
        return {
            users: store.reducer.users,
            activeUser : store.Loginreducer.activeUser,
            comments: store.commentReducer.comments
        }
    },shallowEqual)

    $(document).on('click','.head',function() {
        $('.head').removeClass('active')
        $(this).toggleClass('active')
    })

    // 

    const DeletePost = () =>{
        dispatch(handleDeletePost(id))
    }

    const typeComment = (e) => {
        setComment(e.target.value)
    }

    const handleAddComment = (e) => {
        e.preventDefault()
        let commentObj = {
            postId: id,
            comment,
            comenteterId: activeUser.id,
            deleteStatus: false,
            time: Date.now(),
        }
        if(comment != ""){
            dispatch(AddComment(commentObj))
        }
        setComment('')
    }

    useEffect(() => {
        dispatch(fetchUsers)
        dispatch(getComments)
    },[location.search])


  return (
    <>
        {privatePost ? "" : 
            <div className="card">
                <div className="head">
                {users.map((ele,i) => (
                        <span key={i}>
                            <Link to={ele.id == activeUser.id ? "/profile" : `/user/${ele.id}`}>
                                <img src={userId == ele.id ? ele.avatar == "" ? 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' : ele.avatar : ""} alt="" />
                                <span className="username">{userId == ele.id ? ele.name : ""}</span>
                            </Link>
                        </span>
                ))}
                    <span className="option"> <b>...</b></span>
                    <div className="more">
                        {userId == activeUser.id ?
                            <>
                                <Link onClick={DeletePost}>Delete</Link>
                                <Link>Edit</Link>
                                <Link>Make Private</Link>
                            </>
                        :""}
                    </div>
                </div>
                <div className="content">
                    <img src={imageUrl} width="120px" alt="" />
                </div>
                <div className="likes">
                    <CountPostLikes postId={id} />
                    {/*  */}
                    <Link><i className='fa fa-send-o'></i></Link>
                    {/*  */}
                    <Link to={`/post/${id}`}><i className='fa fa-comment-o'></i></Link>
                    <LoadSaved postId={id} />
                </div>
                <span>{title}</span>
                <div className="comment">
                    <form onSubmit={(e) => handleAddComment(e)}>
                        <input placeholder='comment...' type="text" value={comment} onChange={(e) => typeComment(e)}/>
                        <button>send</button>
                    </form>
                </div>
            </div>
        }
    </>
  )
}
