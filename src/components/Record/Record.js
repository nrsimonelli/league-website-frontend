import React, { useState } from 'react';
import { Modal, Button, Select,  Form, Input } from 'antd';

const { Option } = Select;

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
        <Form.Item name="activeGame" className="collection-create-form_last-form-item">
          <Select placeholder='Select Game' onChange={handleChange}>
            <Option value="game1">Game 1</Option>
            <Option value="game2">Game 2</Option>
            <Option value="game3">Game 3</Option>
          </Select>
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
