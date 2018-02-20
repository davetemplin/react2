import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => 
    <Router>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>;

export default App;