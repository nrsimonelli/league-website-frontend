import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Overview from '../Overview/Overview';
import Record from '../Record/Record';

class App extends Component {

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
                path="/standings"
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

export default App;
