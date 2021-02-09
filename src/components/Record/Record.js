import React, { useState } from 'react';
import { Modal, Button, Select,  Form, Input } from 'antd';

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

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

  const [form] = Form.useForm();
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <Modal
      visible={visible}
      title="Active Game List"
      okText="Create"
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
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item name="activeGameList" >
          <Select placeholder='Select Game' onChange={handleChange}>
            <Option value="game1">Game 1</Option>
            <Option value="game2">Game 2</Option>
            <Option value="game3">Game 3</Option>
          </Select>
        </Form.Item>
        <Form.Item name="playerMat" >
          <Select placeholder='Player Mat' options={MATS} onChange={handleChange} />
        </Form.Item>
        <Form.Item name="playerFaction" >
          <Select placeholder='Player Faction' options={FACTIONS} onChange={handleChange} />
        </Form.Item>
        {/* <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
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
        <CollectionCreateForm
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
