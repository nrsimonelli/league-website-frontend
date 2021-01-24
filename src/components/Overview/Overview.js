import React, {Component} from 'react';
import { Divider } from 'antd';
import { Select } from 'antd';
import { Table } from 'antd';

const { Column } = Table;

const { Option } = Select;

// const columns = [
//   { title: 'Player',
//     dataIndex: 'playerName',
//     key: 'playerName',
//   },
//   {
//     title: 'Games Played',
//     dataIndex: 'gamesPlayed',
//     key: 'gamesPlayed',
//   },
//   {
//     title: 'Points',
//     dataIndex: 'pointScored',
//     key: 'pointScored',
//   },

// ];

const fakeData = [
  {key: '1', playerName: 'JoyDivision', gamesPlayed: 4, pointScored: 20},
  {key: '2', playerName: 'N0ne', gamesPlayed: 3, pointScored: 12},
  {key: '3', playerName: 'Mr. Der', gamesPlayed: 3, pointScored: 9},
  {key: '4', playerName: 'Zesix', gamesPlayed: 3, pointScored: 10},
  {key: '5', playerName: 'Paju', gamesPlayed: 4, pointScored: 6},
  {key: '6', playerName: 'viamer', gamesPlayed: 4, pointScored: 7},
  {key: '7', playerName: 'FOMOF', gamesPlayed: 3, pointScored: 3}
]

// const sampleSeasons = [
//   { id: 1, season: 'Season 1'},
//   { id: 2, season: 'Season 2'},
// ];

// const sampleData = {
//   season: 1,
//   division: [
//     {division: 1, league: [
//       {league: 1, players: [
//         {playerName: 'JoyDivision', gamesPlayed: 4, pointScored: 20},
//         {playerName: 'N0ne', gamesPlayed: 3, pointScored: 12},
//         {playerName: 'Mr. Der', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'Zesix', gamesPlayed: 3, pointScored: 10},
//         {playerName: 'Paju', gamesPlayed: 4, pointScored: 6},
//         {playerName: 'viamer', gamesPlayed: 4, pointScored: 7},
//         {playerName: 'FOMOF', gamesPlayed: 3, pointScored: 3}
//       ]}
//     ]},
//     {division: 2, league: [
//       {league: 1, players: [
//         {playerName: 'Gaami', gamesPlayed: 4, pointScored: 12},
//         {playerName: 'Mooni', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'IceFortress', gamesPlayed: 3, pointScored: 18},
//         {playerName: 'Sledboy', gamesPlayed: 3, pointScored: 0},
//         {playerName: 'Archer', gamesPlayed: 4, pointScored: 6},
//         {playerName: 'knightRider', gamesPlayed: 4, pointScored: 17},
//         {playerName: 'Altar', gamesPlayed: 3, pointScored: 13}
//       ]},
//       {league: 2, players: [
//         {playerName: 'beta', gamesPlayed: 4, pointScored: 15},
//         {playerName: 'Lucky', gamesPlayed: 3, pointScored: 18},
//         {playerName: 'qazzaq', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'Germy', gamesPlayed: 3, pointScored: 1},
//         {playerName: 'ammorning', gamesPlayed: 4, pointScored: 6},
//         {playerName: 'Nevic', gamesPlayed: 4, pointScored: 3},
//         {playerName: 'alpha', gamesPlayed: 3, pointScored: 0}
//       ]}
//     ]},
//     {division: 3, league: [
//       {league: 1, players: [
//         {playerName: 'wolf', gamesPlayed: 4, pointScored: 5},
//         {playerName: 'serpent', gamesPlayed: 3, pointScored: 8},
//         {playerName: 'lotus', gamesPlayed: 3, pointScored: 19},
//         {playerName: 'dragon', gamesPlayed: 3, pointScored: 1},
//         {playerName: 'rock', gamesPlayed: 4, pointScored: 16},
//         {playerName: 'kenji', gamesPlayed: 4, pointScored: 13},
//         {playerName: 'toga', gamesPlayed: 3, pointScored: 10}
//       ]},
//       {league: 2, players: [
//         {playerName: 'mang0', gamesPlayed: 4, pointScored: 12},
//         {playerName: 'hbox', gamesPlayed: 3, pointScored: 3},
//         {playerName: 'ppmd', gamesPlayed: 3, pointScored: 18},
//         {playerName: 'm2k', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'Zain', gamesPlayed: 4, pointScored: 12},
//         {playerName: 'plup', gamesPlayed: 4, pointScored: 9},
//         {playerName: 'leffen', gamesPlayed: 3, pointScored: 15}
//       ]},
//       {league: 3, players: [
//         {playerName: 'beta', gamesPlayed: 4, pointScored: 15},
//         {playerName: 'Lucky', gamesPlayed: 3, pointScored: 18},
//         {playerName: 'qazzaq', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'Germy', gamesPlayed: 3, pointScored: 1},
//         {playerName: 'ammorning', gamesPlayed: 4, pointScored: 6},
//         {playerName: 'Nevic', gamesPlayed: 4, pointScored: 3},
//         {playerName: 'alpha', gamesPlayed: 3, pointScored: 0}
//       ]},
//       {league: 4, players: [
//         {playerName: 'beta', gamesPlayed: 4, pointScored: 15},
//         {playerName: 'Lucky', gamesPlayed: 3, pointScored: 18},
//         {playerName: 'qazzaq', gamesPlayed: 3, pointScored: 9},
//         {playerName: 'Germy', gamesPlayed: 3, pointScored: 1},
//         {playerName: 'ammorning', gamesPlayed: 4, pointScored: 6},
//         {playerName: 'Nevic', gamesPlayed: 4, pointScored: 3},
//         {playerName: 'alpha', gamesPlayed: 3, pointScored: 0}
//       ]}
//     ]},
    
//   ],

// }


class Overview extends Component {

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div className='Ov-root' >
        <div className='Ov-cont'>
          <div className='Ov-div'>
            <div className='Ov-div-select'>
              <Select defaultValue='Season 2' onChange={this.handleChange}>
               <Option value='Season 2'>Season 2</Option>
               <Option value='Season 1'>Season 1</Option>

              </Select>
            </div>
          </div>
          
        </div>
        <div className='Ov-cont'>
        <div className='Ov-div'>
          <div className='Ov-div-title'>Division title</div>
          <Divider />
          <div className='Ov-div-table'>
            <div className='Ov-div-table-title'>
            <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
        </div>
       </div>
       <div className='Ov-cont'>
        <div className='Ov-div'>
          <div className='Ov-div-title'>Division title</div>
          <Divider />
          <div className='Ov-div-table'>
            <div className='Ov-div-table-title'>
            <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
          <div className='Ov-div-table'>
            <div className='Ov-div-table-title'>
              <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
        
        </div>
       </div>
       <div className='Ov-cont'>
        <div className='Ov-div'>
          <div className='Ov-div-title'>Division title</div>
          <Divider />
          <div className='Ov-div-table'>
          <div className='Ov-div-table-title'>
          <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
          <div className='Ov-div-table'>
          <div className='Ov-div-table-title'>
          <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
          <div className='Ov-div-table'>
          <div className='Ov-div-table-title'>
          <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
          <div className='Ov-div-table'>
          <div className='Ov-div-table-title'>
          <div>League X</div>
            </div>
            <Table pagination={false} dataSource={fakeData} size='middle' >
              <Column title='Player' dataIndex='playerName' key='playerName' />
              <Column title='Played' dataIndex='gamesPlayed' key='gamesPlayed' />
              <Column title='Points' dataIndex='pointScored' key='pointScored' />
            </Table>
          </div>
        </div>
       </div>
       

      </div>
    );
  }
  
}

export default Overview;
