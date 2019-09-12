import React, { Component } from 'react';
import 'antd/dist/antd.css'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Explore from './pages/Explore'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import MyVideos from './pages/MyVideos'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={ LandingPage }/>
              <Route exact path='/login' component={ Login }/>
              <Route exact path='/register' component={ Register }/>
              <Route exact path='/explore' component={ Explore }/>
              <Route exact path='/cart' component={ Cart }/>
              <Route exact path='/checkout' component={ Checkout }/>
              <Route exact path='/myvideos' component={ MyVideos }/>
            </Switch>
          </div>
        </Router>
    );
  };
};

export default App;
