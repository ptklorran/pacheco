import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import HomeAdmin from './pages/HomeAdmin'
import HomeAlbum from './pages/HomeAlbum'
import Login from './pages/Login'
import LoginValidator from './components/middlewares/LoginValidator'
import './Router.css'

export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/homeadmin" component={HomeAdmin} />
          <Route path="/loginvalidator" component={LoginValidator} />
          <Route path="/album/:id" component={HomeAlbum} />
        </Switch>
      </BrowserRouter>
    )
  }
}
