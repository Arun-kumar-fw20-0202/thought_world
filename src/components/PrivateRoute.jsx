import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { store } from '../store'

export const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const isAuth = useSelector((store) => {
        return store.isAuth
    })

    if(!isAuth){
        return <Navigate state={location.pathname} to={"/login"} />
    }

    return children
}
