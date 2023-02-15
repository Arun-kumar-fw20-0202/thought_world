import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadUserPost } from '../components/LoadUserPost';
import { fetchSingleUser } from '../redux/registration/action.register';
import "../styles/profile.css"

export const SingleUser = () => {
    const dispatch = useDispatch()
    const {user,profile,posts} = useSelector((store) => {
        return {
          user: store.reducer.users,
          profile: store.reducer.profile,
          posts: store.AddPostreducer.posts
        }
    })
  
  const {id} = useParams('id')
  
  let total_posts = 0
  posts.map((ele) => {
    ele.userId == profile.id ? total_posts++ : ""
  })

    useEffect(() => {
        dispatch(fetchSingleUser(id))
        dispatch(LoadUserPost)
    },[])

  return (
    <div className='profile_main'>
    <div className="P_top">
      
      <div className="avatar">
        <img src={profile.avatar} alt="" />
      </div>
      <div className="data">
        <h3>{profile.name}</h3>
        <p>{profile.given_name}</p>
        <br />
        <div className="totla">
          <h3>Posts: {total_posts}</h3>
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
