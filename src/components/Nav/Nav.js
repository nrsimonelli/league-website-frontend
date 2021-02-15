import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import { Popconfirm, message } from 'antd';

class Nav extends Component {

  navToHome = () => {
    this.props.history.push('/')
  }

  logOutClicked = () => {
    message.success('Logging out');
    this.props.dispatch({ type: 'LOGOUT' })
    
  }

  logInClicked = () => {
    console.log('Log in was clicked');
    window.location = 'http://localhost:5000/auth/login'
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
            {this.props.user.discord_tag ? (

              <div className='Link'>
                <Popconfirm
                 title="Not you?" 
                 okText="Log Out" 
                 cancelText="Cancel"
                 onConfirm={this.logOutClicked}
                 
                >
                  <a href="#">{this.props.user.discord_tag}</a>
                </Popconfirm>
                
              </div>

            ) : (

              <div className='Link' onClick={this.logInClicked}>
              log-in with Discord
              </div>

            )}
          </div>

          
        </div> 
    );
  }
  
}

const mapStateToProps = (state) => ({
  user: state.user,
});


export default withRouter(connect(mapStateToProps)(Nav));
