import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='Root' >
        <div className="Nav">
          <div>title</div>
          <div>
            icon/link container
          </div>
        </div> 
        <div className="Comp-1">
          <div className='Cover-Image'></div>
        </div> 
        <div className="Comp-2">
          <div className='button-cont'>
            <div className='button-1'>button-1</div>
            <div className='button-2'>button-2</div>
          </div>
        </div>   
        <div className="Comp-6">
          Footer text
        </div>     
      </div>
    );
  }
  
}

export default connect()(App);
