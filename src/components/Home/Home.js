import React, {Component} from 'react';
import { Button } from 'antd';

import Footer from '../Footer/Footer';

class Home extends Component {

  navToStandings = () => {
    this.props.history.push('/standings');
  }

  logInClicked = () => {
    console.log('Log in was clicked');
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
            <Button 
              type='danger' 
              shape='default'
              size='large'
              onClick={this.logInClicked}
            >
              Log in
            </Button>
        </div> 
        <Footer />
      </div>
    );
  }
  
}

export default Home;
