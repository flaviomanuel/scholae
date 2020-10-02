import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/list-message" component={ListPage}/>
        </BrowserRouter>
    )
}

export default Routes;