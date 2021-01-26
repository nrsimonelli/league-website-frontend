import React, {Component} from 'react';
import { Divider, Table } from 'antd';

const { Column } = Table;


class League extends Component {

  navToPlayer = () => {
    this.props.history.push('/player');
  }

  render() {
    return (
        <div className="League-root">
          <div className='League-cont'>
            <div className='League-div'>
              <div className='League-div-title Title'>
                League X, season x
              </div>
              <Divider />
              <div className='League-div-table'>
                <Table>
                <Column title='Player' dataIndex='playerName' key='playerName' />
                <Column title='1st' dataIndex='first' key='first' />
                <Column title='2nd' dataIndex='second' key='second' />
                <Column title='3rd' dataIndex='third' key='third' />
                <Column title='4th' dataIndex='fourth' key='fourth' />
                <Column title='%' dataIndex='avgPercentWinningScore' key='avgPercentWinningScore' />
                <Column title='Points' dataIndex='pointScored' key='pointScored' />
                </Table>
              </div>
                
            </div>
          </div>
          <div className='League-cont'>
            <div className='League-div'>
              <div className='League-div-title Title'>
                Games
              </div>
              <Divider />
              <div className='League-div-table'>
                <Table>
                <Column title='Player' dataIndex='playerName' key='playerName' />
                <Column title='Game 1' dataIndex='gameOne' key='gameOne' />
                <Column title='Game 2' dataIndex='gameTwo' key='gameTwo' />
                <Column title='Game 3' dataIndex='gameThree' key='gameThree' />
                <Column title='Game 4' dataIndex='gameFour' key='gameFour' />
                <Column title='Game 5' dataIndex='gameFive' key='gameFive' />
                <Column title='Game 6' dataIndex='gameSix' key='gameSix' />
                <Column title='Game 7' dataIndex='gameSeven' key='gameSeven' />
                </Table>
              </div>
                
            </div>
          </div>
        </div> 
    );
  }
  
}

export default League;
