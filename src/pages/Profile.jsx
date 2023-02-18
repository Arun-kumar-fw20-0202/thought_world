import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadUserPost } from '../components/LoadUserPost'
import { handleGetPost } from '../redux/addPostReducer/action.addPost'
import "../styles/profile.css"

export const Profile = () => {
  const dispatch = useDispatch()
  const {isAuth, activeUser,posts} = useSelector((store) => {
    return { 
      activeUser: store.Loginreducer.activeUser,
      isAuth: store.Loginreducer.isAuth,
      posts: store.AddPostreducer.posts,
    }
  })
  
  let total_posts = 0
  posts.map((ele) => {
    ele.userId == activeUser.id ? total_posts++ : ""
  })

  useEffect(() => {
    dispatch(handleGetPost)
    
  },[])

  // console.log(activeUser)

  return (
    <div className='profile_main'>
      <div className="P_top">
        
        <div className="avatar">
          <img src={activeUser.avatar == "" ? 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' : activeUser.avatar} alt="" />
        </div>
        <div className="data">
          <h3>{activeUser.name}</h3>
          <p>{activeUser.given_name}</p>
          <br />
          <div className="totla">
            <h3>Posts: {total_posts}</h3>
          </div>
        </div>

      </div>
      <div className="My_posts">
        {posts && posts.map((ele,i) => (
          ele.userId == activeUser.id ? 
              <LoadUserPost key={i} {...ele} />
            : ""
          ))}
      </div>
    </div>
  )
}
