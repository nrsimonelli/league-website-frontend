import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class Nav extends Component {

  navToHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
        <div className="Nav-root">
          <div className='Nav-cont'>
            <div className='Link' onClick={this.navToHome}>
              scythe league
            </div>
            <div className='Link'>
              icon/link container
            </div>
            <div className='Link'>
              log-out
            </div>
          </div>

          
        </div> 
    );
  }
  
}

export default withRouter(connect()(Nav));
