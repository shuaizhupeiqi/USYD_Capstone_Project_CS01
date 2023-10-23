import React, { useState } from 'react';
import { withRouter } from 'next/router';
import { Modal } from 'antd';
import { atom, useRecoilState } from 'recoil';

// Create a Recoil atom to manage the modal's open state
const isModalOpenState = atom({
  key: 'isModalOpenState',
  default: false,
});

const scrollablePopupContent = {
  maxHeight: '80vh',
  maxWidth: '90vw',
  overflowY: 'auto',
  overflowX: 'hidden',
};

const PopOver = ({ child, content }) => {
  //userecoilstate to  read  and update the state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (e) => {
    setIsModalOpen(true);
    console.log("Showing modal");
    e.stopPropagation();
  };

  const handleModalClose = (e) => {
    
    setIsModalOpen(false);
    console.log("Closing modal");
    e.stopPropagation();
  };
  //function compoennt
  return (
    <div>
      <style jsx global>{`
        .ant-modal-close-x {
            margin-right: -20px;
        }
      
        .ant-modal-close-x:hover,
        .ant-modal-close-x:focus {
            background-color: transparent !important;
        }
      
        // 重写关闭按钮和其父元素的悬停和焦点样式
        .ant-modal-close:hover,
        .ant-modal-close:focus,
        .ant-modal-close .ant-modal-close-x:hover,
        .ant-modal-close .ant-modal-close-x:focus {
            background-color: transparent !important;
        }
      `}</style>

      {React.cloneElement(child, { onClick: showModal })}
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          footer={null}
          visible={isModalOpen}
          onCancel={handleModalClose}
          bodyStyle={scrollablePopupContent}
          getContainer={false}
        >
          {content}
        </Modal>
      </div>
    </div>
  );
};

export default withRouter(PopOver);