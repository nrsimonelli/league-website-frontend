import React, {Component} from 'react';

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
            
            </Table>
          </div>
            
        </div>
      </div>
      <div className='Player-cont'>
        <div className='Player-div'>
          <div className='Player-div-title Title'>
            More data
          </div>
          <Divider />
          <div className='Player-div-table'>
            <Table>
            
            </Table>
          </div>
            
        </div>
      </div>
    </div> 
);
}
  
}

export default Player;
