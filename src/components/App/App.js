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
          <div className='Cover-Image'></div>
        </div> 
        <div className="Comp-2">
          <div className='button-cont'>
            <Button type='primary' size='large' >Primary</Button>
            <Button type='ghost' size='large'>Ghost</Button>
          </div>
        </div>   
        <div className="Comp-6">
          Footer text
        </div>     
      </div>
    );
  }
  
}

export default App;
