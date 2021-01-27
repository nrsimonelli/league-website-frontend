import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class Nav extends Component {

  navToHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
        <div className="Nav">
          <div className='Link' onClick={this.navToHome}>
            title
          </div>
          <div className='Link'>
            icon/link container
          </div>
          <div className='Link'>
            log-out
          </div>
        </div> 
    );
  }
  
}

export default withRouter(connect()(Nav));
