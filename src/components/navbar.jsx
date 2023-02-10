import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogout } from '../redux/loginReducer/action.login'

export default function Navbar() {
  const dispatch = useDispatch()
  const {isAuth,isLoading} = useSelector((store) => {
    return {
      isAuth: store.isAuth,
      isLoading: store.isLoading
    }
  }) 

  const handleLogout = () => {
    dispatch(AuthLogout())
  }

  return (
    <>
        <header>
            { isLoading ? "Loggin out....." : ""}
            <Link to={"/"}>Home</Link>
            <Link to={"/add-post"}>Add Post</Link>
            <Link to={"/profile"}>Profile</Link>
            {isAuth ? 
              <Link onClick={handleLogout}>Logout</Link> 
              :
              <Link to={"/login"}>Login</Link>
            }
            {/* <Link to={"/"}>Home</Link> */}
        </header>
    </>
  )
}
