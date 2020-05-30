import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/main/Main';
import Profile from './components/profile/Profile';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
       <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/profile" component={Profile} />
            </Switch>
       </div>
    </BrowserRouter>
)

export default Routes;