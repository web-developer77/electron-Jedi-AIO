import React, { useContext, useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Dashboard } from './pages/dashboard';
import { Task } from './pages/task';
import { Proxies } from './pages/proxies';
import Settings from './pages/settings';
import { Header } from './components/Header';
import Accounts from './pages/Accounts';
import { Profiles } from './pages/Profiles';
import ThemeContext from './Context/ThemeContext';

export default function SubApp() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme + "main"}>
      <div className="move" />
        <Router>
          <div className="content flex w-screen h-screen">
            <Header />
            <Switch>
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/Tasks" component={Task} />
              <Route path="/Proxies" component={Proxies} />
              <Route path="/Profile" component={Profiles} />
              <Route path="/Accounts" component={Accounts} />
              <Route path="/Settings" component={Settings} />
              <Route path="/">
                <Redirect to="/Dashboard" />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}
