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
          <div onClick={this.navToHome}>
            title
          </div>
          <div>
            icon/link container
          </div>
          <div>
            log-out
          </div>
        </div> 
    );
  }
  
}

export default withRouter(connect()(Nav));
