import React from 'react';
import { Layout, Avatar, Typography, Space } from 'antd';
import '../styles/Navbar.css';

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Header className="navbar">
      <Space size="middle" align="center">
        <Avatar
          src="https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000"
          size={40}
          className="navbar-avatar"
        />
        <Title level={3} className="navbar-title">
          MIA - Chatbot
        </Title>
      </Space>
    </Header>
  );
};

export default Navbar;
