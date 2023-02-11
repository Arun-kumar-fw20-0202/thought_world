import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetPost } from '../redux/addPostReducer/action.addPost'
import { fetchUsers } from '../redux/registration/action.register'

export const LoadPost = () => {
    const dispatch = useDispatch()
    const {activeUser,posts, users} = useSelector((store) => {
        return {
            activeUser: store.Loginreducer.activeUser,
            posts: store.AddPostreducer.posts,
            users: store.reducer.users
        }
    })

    console.log(users)

  useEffect(() => {
    dispatch(fetchUsers)
    dispatch(handleGetPost)
  },[])
 

  return (
    <>
        {posts && posts.map((ele,i) => (

            <div key={i} className="card">
                <div className="head">
                    {/* {users && users.map((el) => {
                        <>
                            <img src={activeUser.avatar} alt="" />
                            <div className="username">{ele.name}</div>
                        </> 
                    })} */}
                </div>
                <div className="content">
                    <img src="" alt="" />
                </div>
                <div className="likes"></div>
                <div className="comment">
                    <input type="text" />
                    <button>send</button>
                </div>
            </div>
        ))}
    </>
  )
}
