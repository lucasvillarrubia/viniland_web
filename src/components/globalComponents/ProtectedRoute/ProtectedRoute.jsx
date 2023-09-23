import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children, redirPath }) => {
        const { currentUser } = useSelector(state => state.users);
        console.log(redirPath);
        
        return currentUser ? (<Outlet />) : (<Navigate to={redirPath} />)
}

export default ProtectedRoute