import React, {Component} from 'react';
import { Divider, Table } from 'antd';

const { Column } = Table;

class Player extends Component {

  render() {
    return (
      <div className="Player-root">
      <div className='Player-cont'>
        <div className='Player-div'>
          <div className='Player-div-title Title'>
            Player $X,
          </div>
          <Divider />
          <div className='Player-div-table'>
          <Table>
          <Column title='Feature Coming Soon' />

          </Table>
          </div>
            
        </div>
      </div>
    </div> 
);
}
  
}

export default Player;
