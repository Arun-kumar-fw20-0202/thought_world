import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {

  const {isAuth, activeUser} = useSelector((store) => {
    return { 
      activeUser: store.activeUser,
      isAuth: store.isAuth
    }
  })
  console.log(isAuth)
  console.log(activeUser)

  return (
    <div>
      <img src={activeUser.picture} alt="" />
      <h3>{activeUser.name}</h3>
      <p>{activeUser.given_name}</p>
    </div>
  )
}
