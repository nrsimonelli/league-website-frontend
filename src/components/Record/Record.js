import React, { useState } from 'react';
import { Modal, Button, Select, Form, Input } from 'antd';

const CustomizedForm = ({ onChange, fields }) => {
  return (
    <Form
      name="global_state"
      layout="inline"
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};



const Record = () => {


  return (
      <div className="Rec-root">
        <div className="Rec-cont">
          <Button>
            Record Game
          </Button>
          
          
        </div>
      
      </div> 
  );
  
}

export default Record;
