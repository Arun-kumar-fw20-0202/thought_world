import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogout } from '../redux/loginReducer/action.login'

export default function Navbar() {
  const dispatch = useDispatch()
  const {isAuth,isLoading,activeUser} = useSelector((store) => {
    return {
      isAuth: store.Loginreducer.isAuth,
      isLoading: store.Loginreducer.isLoading,
      activeUser: store.Loginreducer.activeUser,
    }
  }) 

  const handleLogout = () => {
    dispatch(AuthLogout())
  }

  return (
    <>
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/add-post"}>Add Post +</Link>
            {isAuth ? 
              <Link style={{textAlign: "center"}} onClick={handleLogout}>
                {/* Logout */}
                <img src={activeUser.avatar} alt="" /> 
                {activeUser.name} 
              </Link> 
              :
              <Link to={"/login"}>Login </Link>
            }
            {/* <Link to={"/"}>Home</Link> */}
        </header>
    </>
  )
}
