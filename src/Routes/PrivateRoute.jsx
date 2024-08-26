import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user, loading}=useContext(AuthContext)
    if (user) {
        return children
    }
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    return (
        <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    );
};

PrivateRoute.propTypes = {
    
};

export default PrivateRoute;