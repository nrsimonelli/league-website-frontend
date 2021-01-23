import React, {Component} from 'react';
import { Button } from 'antd';

import Footer from '../Footer/Footer';

class Home extends Component {

  componentDidMount = () => {
    console.log('Home did mount');
    
  }

  navToStandings = () => {
    this.props.history.push('/standings');
  }

  logInClicked = () => {
    console.log('Log in was clicked');
    this.setState({
      showLogin: false
    });
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
            {this.state.showLogin ? (
              <Button 
              type='danger' 
              shape='default'
              size='large'
              onClick={this.logInClicked}
            >
              Log in
            </Button>

            ) : (
            <Button 
              type='danger' 
              shape='default'
              size='large'
              onClick={this.navToRecord}
            >
              Record
            </Button>

            )}
            
        </div> 
        <Footer />
      </div>
    );
  }
  
}

export default Home;
