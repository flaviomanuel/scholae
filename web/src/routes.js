import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import RegisterPage from './pages/RegisterPage';
import MessagePage from './pages/MessagePage';
import NotFoundPage from './pages/NotFoundPage';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact  component={LoginPage}/>
                <Route path="/list-message/:id" exact  component={ListPage}/>
                <Route path="/register-message" exact component={RegisterPage}/>
                <Route path="/message/:id" exact component={MessagePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;