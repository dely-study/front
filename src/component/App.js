import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import LoginPage from '../LoginPage';

const AppPresenter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App}></Route>
        <Route path="/logged-in" component={LoginPage}></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppPresenter;
