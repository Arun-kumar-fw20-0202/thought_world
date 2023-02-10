import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {

  const {isAuth, activeUser} = useSelector((store) => {
    return { 
      activeUser: store.Loginreducer.activeUser,
      isAuth: store.Loginreducer.isAuth
    }
  })

  // console.log(activeUser)

  return (
    <div>
      <img src={activeUser.avatar} alt="" />
      <h3>{activeUser.name}</h3>
      <p>{activeUser.given_name}</p>
    </div>
  )
}
