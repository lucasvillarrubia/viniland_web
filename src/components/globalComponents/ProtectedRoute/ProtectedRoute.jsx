import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ redirPath }) => {
        const { currentUser } = useSelector(state => state.users);
        
        return currentUser ? (<Outlet />) : (<Navigate to={redirPath} />)
}

export default ProtectedRoute