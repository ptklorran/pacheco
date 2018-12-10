import React, { Component } from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import AbrirAlbum from './pages/AbrirAlbum'
import PainelAdmin from './pages/PainelAdmin'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/openalbum" component={AbrirAlbum} />
          <Route path="/paineladmin" component={PainelAdmin} />
        </Switch>
      </BrowserRouter>
    )
  }
}
