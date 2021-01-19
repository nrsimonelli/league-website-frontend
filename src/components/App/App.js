import React, {Component} from 'react';
import { Button } from 'antd';
import './App.css';

import Nav from '../Nav/Nav'

class App extends Component {

  render() {
    return (
      <div className='Root' >
        <Nav />
        <div className="Comp-1">
          <div className='button-cont'>
            <Button type='primary'  size='large' >View</Button>
            <Button type='danger'  size='large'>Log in</Button>
          </div> 
          <div className="Comp-6">
          developed by / donate here / contribute here
          </div> 
        </div> 
           
            
      </div>
    );
  }
  
}

export default App;
