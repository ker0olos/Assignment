import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './screens/login';
import Dashboard from './screens/dashboard';

ReactDOM.render(<Router>
  <Switch>
    <Route exact path={ '/' }>
      <Login/>
    </Route>

    <Route path={ '/dashboard' }>
      <Dashboard/>
    </Route>

    <Route path={ '*' }>
      <p>404</p>
    </Route>
  </Switch>
</Router>, document.body.querySelector('#app'));
