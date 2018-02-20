import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import HeaderBar from './HeaderBar';

export default () => 
    <BrowserRouter>
        <div className="container">
            <HeaderBar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </Switch>
        </div>
    </BrowserRouter>