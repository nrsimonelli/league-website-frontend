import React, {Component} from 'react';
import { Button } from 'antd';

import Footer from '../Footer/Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount = () => {
    console.log('Home did mount');
    console.log('checking user props', this.props.user);
    
  }

  navToStandings = () => {
    this.props.history.push('/season');
  }

  logInClicked = () => {
    console.log('Log in was clicked');
    this.setState({
      showLogin: false
    });
    window.location = 'http://localhost:5000/auth/login'
  }

  navToRecord = () => {
    this.props.history.push('/record');
  }

  state = {
    showLogin: true,

  }

  render() {
    return (
      <div className="Home">
        <div className='Button-cont'>
            <Button 
              type='primary' 
              shape='default'
              size='large'
              onClick={this.navToStandings}
            >
              View
            </Button>
            {this.props.user.discord_id ? (
              <Button 
              type='danger' 
              shape='default'
              size='large'
              onClick={this.navToRecord}
            >
              Record
            </Button>

            ) : (
            <Button 
              type='danger' 
              shape='default'
              size='large'
              onClick={this.logInClicked}
            >
              Login with Discord
            </Button>

            )}
        </div> 
        {this.props.user.discord_id && (
        
        <h1 style={{ backgroundColor: 'black'}}>hello {this.props.user.discord_tag}</h1>
        
        )}
        <Footer />
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Home));
