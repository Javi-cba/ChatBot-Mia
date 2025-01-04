import React from 'react';
import { Avatar, Typography, Space, Flex, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useImg } from '../context/imgFileContext';
import '../styles/Navbar.css';
import { usechat } from '../context/chatContext';

const { Title } = Typography;

const Navbar = () => {
  const { handleRemoveImage } = useImg();
  const { dispatch, chat } = usechat();
  return (
    <Flex className="navbar" justify="space-between">
      <Space size="middle" align="center" justify="center">
        <Avatar
          src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000"
          size={40}
          className="navbar-avatar"
        />
        <Title level={3} className="navbar-title">
          MIA Chatbot
        </Title>
      </Space>
      <div>
        {chat.msjs.length > 0 && (
          <Button
            icon={<DeleteOutlined style={{ color: 'white' }} />}
            style={{ backgroundColor: '#263339', borderColor: '#1D425D' }}
            onClick={() => {
              handleRemoveImage();
              dispatch({ type: 'CLEAR_CHAT' });
            }}
          ></Button>
        )}
      </div>
    </Flex>
  );
};

export default Navbar;
