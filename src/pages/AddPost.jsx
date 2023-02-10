import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleAddPost } from '../redux/addPostReducer/action.addPost';
import "../styles/addpost.css"


const addData = {
  title: "",
  imageUrl: "",
  privatePost: false
}
export const AddPost = () => {
  const [state, setState] = useState(addData);
  const { title, imageUrl , privatePost} = state;
  const dispatch = useDispatch()

  const {isLoading, isError, activeUser} = useSelector((store) => {
    return {
      activeUser: store.Loginreducer.activeUser,
      isLoading: store.AddPostreducer.isLoading,
      isError: store.AddPostreducer.isError
    }
  })

  const handleChange = (e) => {
    let val = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
    setState({...state, [e.target.name]: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = {
      userId: +activeUser.id,
      title,
      imageUrl,
      privatePost: privatePost
    }
    dispatch(handleAddPost(newObj))
  }
  
  // if(!isLoading){
    // setState(addData)
  // }

  return (
    <div className='M_add'>
      <div className="box">
        {isLoading ? <h3>Adding post...</h3> : "" }
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputBx">
            <span>Title</span>
              <input value={title} type="text" name='title' onChange={(e)=> handleChange(e)} />
            </div>
            
            <div className="inputBx">
              <span>Image Url</span>
              <input value={imageUrl} type="url" name='imageUrl' onChange={(e)=> handleChange(e)} />
            </div>

            <div className="inputBx">
              <span>Make Post Private </span>
              <input value={privatePost} name="privatePost" type="checkbox" onChange={(e) => handleChange(e)} />
            </div>

            <div className="inputBx">
              <button>Add Post +</button>
            </div>
        </form>  
      </div>
    </div>
  )
}
