import { Row, Col, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import '../../styles/chat.css';

const CmpMsj = ({ msj, owner }) => {
  return (
    <Row
      justify={owner === 'USER' ? 'end' : 'start'}
      style={{ margin: 0, width: '100%' }}
    >
      <Col xs={20} sm={18} md={16} lg={14} xl={12} className="chatMsjCnt">
        <Row align="top" className="chatMsjCnt" gutter={[8, 0]}>
          <Col>
            <Avatar
              icon={owner === 'USER' ? <UserOutlined /> : null}
              src={
                owner !== 'USER'
                  ? 'https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000'
                  : undefined
              }
              className="chatAvatar"
            />
          </Col>
          <Col flex="auto" className="chatMsjCnt">
            <Space direction="vertical" align="start" className="chatMsj">
              <p>{owner}</p>
              <ReactMarkdown>{msj}</ReactMarkdown>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CmpMsj;
