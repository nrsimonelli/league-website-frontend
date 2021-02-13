import React, { useState } from 'react';
import { Modal, Button, Select,  Form, Space, Input, InputNumber } from 'antd';

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
  {game_id: '1', player_id: '1', username: 'JoyD1v', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '1', player_id: '2', username: 'runningtrumpet', faction: 'Saxony', mat: 'Patriotic', score: 60, round: '', bid: 'false', bid_total: ''},
  {game_id: '1', player_id: '3', username: 'bbScythe', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '1', player_id: '4', username: 'dizy', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '2', player_id: '5', username: 'Nevic', faction: 'Polania', mat: 'Industrial', score: 55, round: '', bid: 'false', bid_total: ''},
  {game_id: '2', player_id: '6', username: 'Feast', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '2', player_id: '7', username: 'Der', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '2', player_id: '8', username: 'FOMOF', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', player_id: '9', username: 'Sniff', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', player_id: '10', username: 'ammorning', faction: 'Saxony', mat: 'Patriotic', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', player_id: '11', username: 'Germy', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '3', player_id: '12', username: 'caitlin', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '4', player_id: '1', username: 'JoyD1v', faction: 'Crimea', mat: 'Engineering', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '4', player_id: '6', username: 'Feast', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '4', player_id: '13', username: 'N00dles', faction: 'Albion', mat: 'Mechanical', score: 30, round: '', bid: 'false', bid_total: ''},
  {game_id: '5', player_id: '8', username: 'FOMOF', faction: 'Rusviet', mat: 'Militant', score: 75, round: '', bid: 'true', bid_total: 30},
  {game_id: '5', player_id: '5', username: 'Nevic', faction: null, mat: null, score: null, round: '', bid: 'true', bid_total: 5},
  {game_id: '5', player_id: '7', username: 'Der', faction: 'Togawa', mat: 'Industrial', score: 50, round: '', bid: 'true', bid_total: 0},
  {game_id: '6', player_id: '1', username: 'JoyD1v', faction: null, mat: null, score: null, round: '', bid: 'false', bid_total: ''},
  {game_id: '6', player_id: '14', username: 'lucky', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '7', player_id: '6', username: 'Feast', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
  {game_id: '7', player_id: '15', username: 'NAOTO_HON', faction: '', mat: '', score: '', round: '', bid: 'false', bid_total: ''},
 
]

const CreateGameForm = ({ visible, onCreate, onCancel }) => {

  const [form] = Form.useForm();
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const onGameChange = (value) => {
    console.log(`selected game change ${value}`);

    // let filterData = GAME_PLAYER.filter(e => e.game_id === value)
    // console.log(filterData);

    // form.setFieldsValue({ activeGameList: value});
  }

  return (
    <Modal
      visible={visible}
      title="Record Game"
      centered
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      width={700}
      
    >
      <Form
        
        form={form}
        layout="horizontal"
        name="record-game-form"
        colon={false}
        
      >
        <Form.Item name="activeGameList" label='Games' rules={[{ required: true, message: 'Missing game' }]}  labelCol={{ span: 5 }} labelAlign="left" >
          <Select placeholder='Select Game' onChange={onGameChange} style={{ width: 256 }} allowClear > 
            {(GAMES.map(game => (
              <Option key={game.id} value={game.id}>{game.div_name}, {game.sub_name}</Option>
            )))}

          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.activeGameList !== currentValues.activeGameList}
        >
          {({ getFieldValue }) => {
            const selectedGame = GAME_PLAYER.filter(e => e.game_id === getFieldValue('activeGameList'))

            return getFieldValue('activeGameList') && (
              <div>
                <Form.Item label=' ' labelCol={{ span: 5 }} labelAlign="left">
                  <InputNumber placeholder="Rounds" min={8} max={30} style={{ width: 120 }} />
                </Form.Item>

                {(selectedGame.map(player => (
                  
                  <Form.Item label={player.username} labelCol={{ span: 5 }} labelAlign="left" key={player.player_id}  >
                    <Form.Item
                      name={`${player.player_id} faction`}
                      rules={[{ required: true }]}
                      style={{ display: 'inline-block', margin: '0 8px 0 0' }}
                    >
                      <Select 
                        placeholder="Faction"
                        options={FACTIONS}
                        onChange={handleChange}
                        style={{ width: 120 }}
                        
                      />
                    </Form.Item>
                    <Form.Item
                     name={`${player.player_id} mat`}
                     rules={[{ required: true }]}
                     style={{ display: 'inline-block', margin: '0 8px' }}
                    >
                      <Select 
                        placeholder="Player Mat"
                        options={MATS}
                        onChange={handleChange}
                        style={{ width: 120 }}
                      />
                    </Form.Item>
                    <Form.Item
                      name={`${player.player_id} score`}
                      rules={[{ required: true }]}
                      style={{ display: 'inline-block', margin: '0 8px' }}
                    >
                      <InputNumber placeholder="Score" min={0} max={200} style={{ width: 90 }} onChange={handleChange}   />
                    </Form.Item>

                    {selectedGame[0].bid === "true" ? (
                        <Form.Item
                          name={`${player.player_id} bid`}
                          rules={[{ required: true }]}
                          style={{ display: 'inline-block', margin: '0 8px' }}
                        >
                          
                          <InputNumber placeholder="Bid" min={0} max={50} style={{ width: 90 }} onChange={handleChange} />

                        </Form.Item>
                      ) : 
                      
                        null
                    
                    }


                  </Form.Item>
                  
                )))}
                

              </div>
              
            )
          }}

        </Form.Item>

        {/* <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.activeGameList !== curValues.activeGameList}>
          {({ getFieldValue }) =>{

            const current_id = getFieldValue('activeGameList')
            const selectedGame = GAME_PLAYER.filter(e => e.game_id === current_id)

            return (
              <div>
              {(selectedGame.map(player => (
                <Form.Item key={player.key} >
                  <Input label='Player' defaultValue={player.username}/>
                  <Select label='Faction' defaultValue={player.faction} options={FACTIONS} />
                  <Select label='Mat' defaultValue={player.mat} options={MATS} />
                  <InputNumber label='Score'min={0} max={200} defaultValue={player.score} />
                  

                </Form.Item>
              )))}
              </div>
              
            );
          }}

        </Form.Item> */}
        






        {/* placehholder select fields */}
        {/* <Form.Item name="playerMat" >
          <Select placeholder='Player Mat' options={MATS} onChange={handleChange} />
        </Form.Item>
        <Form.Item name="playerFaction" >
          <Select placeholder='Player Faction' options={FACTIONS} onChange={handleChange} />
        </Form.Item> */}
        
      </Form>
    </Modal>
  );
};
  

const Record = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
      <div className="Rec-root">
        <div className="Rec-cont">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          RecordGame
        </Button>
        <CreateGameForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
          
          
        </div>
      
      </div> 
  );
  
};

export default Record;
