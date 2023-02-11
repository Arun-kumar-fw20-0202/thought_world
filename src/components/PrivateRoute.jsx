import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const isAuth = useSelector((store) => {
        return store.Loginreducer.isAuth
    })

    if(!isAuth){
        return <Navigate state={location.pathname} to={"/login"} />
    }

    return children
}
