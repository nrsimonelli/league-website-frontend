import React, { useState } from 'react';
import { Modal, Button, Select,  Form, Input, InputNumber } from 'antd';

const { Option } = Select;

const MATS = [
  {label: 'Industrial', value: 'Industrial'},
  {label: 'Engineering', value: 'Engineering'},
  {label: 'Militant', value: 'Militant'},
  {label: 'Patriotic', value: 'Patriotic'},
  {label: 'Innovative', value: 'Innovative'},
  {label: 'Mechanical', value: 'Mechanical'},
  {label: 'Agricultural', value: 'Agricultural'},
];

const FACTIONS = [
  {label: 'Crimea', value: 'Crimea'},
  {label: 'Saxony', value: 'Saxony'},
  {label: 'Polania', value: 'Polania'},
  {label: 'Albion', value: 'Albion'},
  {label: 'Nordic', value: 'Nordic'},
  {label: 'Rusviet', value: 'Rusviet'},
  {label: 'Togawa', value: 'Togawa'},
];

const GAMES = [
  {id: '1', div_name: 'QuarterFinal', sub_name: 'A', finshed: 'false'},
  {id: '2', div_name: 'QuarterFinal', sub_name: 'B', finshed: 'false'},
  {id: '3', div_name: 'QuarterFinal', sub_name: 'C', finshed: 'true'},
  {id: '4', div_name: 'QuarterFinal', sub_name: 'D', finshed: 'false'},
  {id: '5', div_name: 'SemiFinal', sub_name: 'A', finshed: 'true'},
  {id: '6', div_name: 'SemiFinal', sub_name: 'B', finshed: 'false'},
  {id: '7', div_name: 'ChampionshipFinal', sub_name: 'A', finshed: 'false'},

]

const GAME_PLAYER = [
  {game_id: '1', username: 'JoyD1v', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '1', username: 'onyablock', faction: 'Saxony', mat: 'Patriotic', score: 60, round: '', bid: 'false', bid_total: ''},
  {game_id: '1', username: 'bbScythe', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '1', username: 'dizy', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '2', username: 'Nevic', faction: 'Polania', mat: 'Industrial', score: 55, round: '', bid: 'false', bid_total: ''},
  {game_id: '2', username: 'Feast', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '2', username: 'Der', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '2', username: 'FOMOF', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', username: 'Sniff', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', username: 'ammorning', faction: 'Saxony', mat: 'Patriotic', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', username: 'Germy', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', username: 'caitlin', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '4', username: 'JoyD1v', faction: 'Crimea', mat: 'Engineering', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '4', username: 'Feast', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '4', username: 'N00dles', faction: 'Albion', mat: 'Mechanical', score: 30, round: '', bid: 'false', bid_total: ''},
  {game_id: '5', username: 'FOMOF', faction: 'Rusviet', mat: 'Militant', score: 75, round: '', bid: 'true', bid_total: 30},
  {game_id: '5', username: 'Nevic', faction: null, mat: null, score: null, round: '', bid: 'true', bid_total: 5},
  {game_id: '5', username: 'Der', faction: 'Togawa', mat: 'Industrial', score: 50, round: '', bid: 'true', bid_total: 0},
  {game_id: '6', username: 'Joy', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '6', username: 'lucky', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '7', username: 'Feast', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '7', username: 'NAOTO_HON', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
 
]


  

const FormTest = () => {
 

  return (
      <div className="Rec-root">
        <div className="Rec-cont">
        
        
          
          
        </div>
      
      </div> 
  );
  
};

export default FormTest;
