import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { handleDeletePost } from '../redux/addPostReducer/action.addPost'
import { fetchUsers } from '../redux/registration/action.register'
import $ from 'jquery';
import { followHandler, LoadFollower, UnfollowHandler } from '../redux/follower/action.follower'


export const PostHead = ({userId,id}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    // console.log(userId)
    const {activeUser, users, follower} = useSelector((store) => {
        return {
            users: store.reducer.users,
            activeUser : store.Loginreducer.activeUser,
            follower : store.FollowerReducer.follower
        }
    },shallowEqual)
    
    $(document).on('click','.option',function() {
        $('.option').removeClass('active')
        $(this).toggleClass('active')
    })
    
    const follow_user = () => {
        let obj = {
            followingId: userId,
            myId: activeUser.id,
            date: Date.now()
        }
        dispatch(followHandler(obj))
    }
    const unfollow_user = (unFollowId) => {
        // alert(unFollowId)
        dispatch(UnfollowHandler(unFollowId))
    }

    const DeletePost = () =>{
        dispatch(handleDeletePost(id))
    }    

    let check = false;
    let followId = null;
    follower.map((ele) => {
        ele.followingId == userId ? check = true : ""
        ele.followingId == userId ? followId = ele.id : ""
    })

    useEffect(() => {
        dispatch(fetchUsers)
        dispatch(LoadFollower)
    },[location.search])


  return (
    <>
        <div className="head">
            {users.map((ele,i) => (
                userId == ele.id ?
                    <span className='headSpan' key={i}>
                        <Link to={ele.id == activeUser.id ? "/profile" : `/user/${ele.id}`}>
                            <img src={userId == ele.id ? ele.avatar == "" ? 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' : ele.avatar : ""} alt="" />
                        </Link>
                            <span className="username">
                                <Link to={ele.id == activeUser.id ? "/profile" : `/user/${ele.id}`}>
                                    {userId == ele.id ? ele.name : ""}
                                </Link>
                                {" "}
                                {/* <span key={ele.id}> */}
                                {check ? <button onClick={() => unfollow_user(followId)}>Following</button> : <button onClick={follow_user}>Follow</button>}
                                {/* </span> */}
                            </span>
                    </span>
            : ""))}
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
    </>
  )
}
