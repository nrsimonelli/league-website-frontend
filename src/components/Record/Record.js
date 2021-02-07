import React, { useState } from 'react';
import { Modal, Button } from 'antd';




const Record = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
      <div className="Rec-root">
        <div className="Rec-cont">
          <Button onClick={showModal}>
            Record Game
          </Button>
          
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      </Modal>
        </div>
      
      </div> 
  );
  
  
}

export default Record;
