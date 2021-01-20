import React, {Component} from 'react';
import { Button } from 'antd';

import Footer from '../Footer/Footer';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className='Button-cont'>
            <Button type='primary' size='large'>View</Button>
            <Button type='danger' size='large'>Log in</Button>
        </div> 
        <Footer />
      </div>
    );
  }
  
}

export default Home;
