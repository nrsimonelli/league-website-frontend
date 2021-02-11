import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Overview from '../Overview/Overview';
import Record from '../Record/Record';
import League from '../League/League';
import Player from '../Player/Player';
import FormTest from '../FormTest/FormTest';


class App extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER'
    })
  }

  render() {
    return (

      <Router>
        <div className='Root' >
          <Nav />
            <Switch>
              <Redirect 
                exact 
                from="/" 
                to="/home" 
              />
              <Route 
                exact
                path="/home"
                component={Home}
              />
              <Route
                exact
                path="/league"
                component={League}
              />
              <Route
                exact
                path="/player"
                component={Player}
              />
              <Route
                exact
                path="/formtest"
                component={FormTest}
              />
              <Route
                exact
                path="/season"
                component={Overview}
              />
              <Route
                exact
                path="/record"
                component={Record}
              />
              <Route 
                render={() => <h1>404</h1>} 
              />
            </Switch>
        </div>
      </Router>

    );
  }
}

export default connect()(App);
