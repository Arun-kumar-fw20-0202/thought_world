import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadUserPost } from '../components/LoadUserPost'
import { handleGetPost } from '../redux/addPostReducer/action.addPost'

export const Profile = () => {
  const dispatch = useDispatch()
  const {isAuth, activeUser,posts} = useSelector((store) => {
    return { 
      activeUser: store.Loginreducer.activeUser,
      isAuth: store.Loginreducer.isAuth,
      posts: store.AddPostreducer.posts,
    }
  })
  

  useEffect(() => {
    dispatch(handleGetPost)
    
  },[])

  // console.log(activeUser)

  return (
    <>
      <div className="P_top">
        <img src={activeUser.avatar} alt="" />
        <h3>{activeUser.name}</h3>
        <p>{activeUser.given_name}</p>
      </div>
      <div className="My_posts">
        {posts && posts.map((ele,i) => (
          ele.userId == activeUser.id ? 
              <LoadUserPost key={i} {...ele} />
            : ""
          ))}
      </div>
    </>
  )
}
