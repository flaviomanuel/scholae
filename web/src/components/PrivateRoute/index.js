import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
    const isLogged = !!localStorage.getItem('token');
    return isLogged ? <Route {...props}/> : <Redirect to='/login'/>
}

export default PrivateRoute