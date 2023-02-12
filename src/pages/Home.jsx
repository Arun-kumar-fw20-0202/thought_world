import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LoadPost } from '../components/LoadPost'
import { handleGetPost } from '../redux/addPostReducer/action.addPost'
import "../styles/posts.css"

export const Home = () => {
  const dispatch = useDispatch()
    const {activeUser,posts} = useSelector((store) => {
        return {
            activeUser: store.Loginreducer.activeUser,
            posts: store.AddPostreducer.posts
        }
    },shallowEqual)

  useEffect(() => {
    dispatch(handleGetPost)
  },[])
 
  return (
    <div className='AllCards'>
      {posts && posts.map((ele,i) => (
        <LoadPost key={i} {...ele} />
      ))}
    </div>
  )
}
