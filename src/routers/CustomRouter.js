
import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const CustomRouter = (props) => {
    
    const {isAuthenticated} = props;

    if (isAuthenticated) {
        return <Route {...props} /> 
    }
    
    return <Redirect to="/demo/login" />
}
