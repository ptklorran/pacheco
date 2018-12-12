import React, { Component } from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import HomeAdmin from './pages/HomeAdmin'
import Login from './pages/Login'

import history from './history'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/homeadmin" component={HomeAdmin} />
        </Switch>
      </BrowserRouter>
    )
  }
}
