import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroutes = ({ children }) => {

    const token = localStorage.getItem('token')
    // console.log(token, "token");

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    return children;

}

export default Protectedroutes
