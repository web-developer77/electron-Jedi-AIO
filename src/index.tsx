import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.global.css';
import { HashRouter, Route } from 'react-router-dom';
import { Login } from './pages/login';


render(
  <HashRouter>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/auth" component={Login} />
  </HashRouter>,

  document.getElementById('root')
);
