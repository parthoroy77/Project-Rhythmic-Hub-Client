import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className='h-[600px] flex items-center justify-center'>
            <DotLoader color="#36d7b7" />
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'}>
            
        </Navigate>
    );
};

export default PrivateRoute;