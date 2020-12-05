import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import RegisterPage from './pages/RegisterPage';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/list-message" component={ListPage}/>
            <Route path="/register-message" component={RegisterPage}/>
        </BrowserRouter>
    )
}

export default Routes;