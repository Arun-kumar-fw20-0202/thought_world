import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { LoadUserPost } from '../components/LoadUserPost';
import { handleGetPost } from '../redux/addPostReducer/action.addPost';
import { followHandler, LoadFollower, UnfollowHandler } from '../redux/follower/action.follower';
import { fetchSingleUser, fetchUsers } from '../redux/registration/action.register';
import "../styles/profile.css"

export const SingleUser = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {user,profile,posts,activeUser,follower} = useSelector((store) => {
        return {
          user: store.reducer.users,
          profile: store.reducer.profile,
          posts: store.AddPostreducer.posts,
          activeUser: store.Loginreducer.activeUser,
          follower : store.FollowerReducer.follower
        }
    },shallowEqual)
  const {id} = useParams('id')
  // console.log(posts)

  // Check if following or not
    let check = false;
    let followId = null;
    follower.map((ele) => {
      ele.followingId == id && ele.myId == activeUser.id ? check = true : ""
      ele.followingId == id ? followId = ele.id : ""
    })

  // Get following & followers
  let followers = 0;
  let following = 0;
  follower.map((ele) => {
    id == ele.myId ? following++ :""
    //get followers
    user.map((el) => {
      el.id == ele.followingId && el.id == id ? followers++ : ""
    })
  })


  // follow user button
  const follow_user = () => {
      let obj = {
        followingId: id,
        myId: activeUser.id,
        date: Date.now()
    }
    dispatch(followHandler(obj)) 
  }
  // Unfollow user Button
  const unfollow_user = (unFollowId) => {
    dispatch(UnfollowHandler(unFollowId))
}

// Get total post
  let total_posts = 0
  let newAvatar = ''
  posts.map((ele) => {
    ele.userId == profile.id ? total_posts++ : ""
  })
  user.map((ele) => {
    ele.id == id ? newAvatar  = ele.avatar : ""
  })
  
  // fetching data
  useEffect(() => {
      dispatch(fetchSingleUser(id))
      dispatch(handleGetPost)
      dispatch(fetchUsers)
      dispatch(LoadFollower)
      dispatch(LoadFollower)
  },[location.search])

  return (
    <div className='profile_main'>

      <div className="P_top">
        <div className="avatar">
          <img src={newAvatar == "" ? 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' : newAvatar} alt="" />
        </div>
        <div className="data">
          <h3>
            {profile && profile.name} 
            {check ? <button onClick={() => unfollow_user(followId)}>Unfollow</button> : <button onClick={follow_user}>Follow</button>}
          </h3>
          <p>{profile && profile.given_name}</p>
          <br />
          <div className="totla">
            <h3>Posts: {total_posts}</h3>
            <h3>Followers: {followers}</h3>
            <h3>Following: {following}</h3>
          </div>
        </div>
      </div>

    <div className="My_posts">
      {posts && posts.map((ele,i) => (
        ele.userId == profile.id ? 
            <LoadUserPost key={i} {...ele} />
          : ""
        ))}
    </div>
  </div>
  )
}
