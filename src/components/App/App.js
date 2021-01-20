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
                render={() => <h1>404</h1>} 
              />
            </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
