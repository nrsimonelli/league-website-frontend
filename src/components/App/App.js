import React, {Component} from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';

class App extends Component {

  render() {
    return (
      <div className='Root' >
        <Nav />
        <Home />

      </div>
    );
  }
  
}

export default App;
