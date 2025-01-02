import { useContext } from 'react';
import { Row, Col, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Markdown from './Markdown';
import SyncLoader from 'react-spinners/SyncLoader';
import '../../styles/chat.css';
import { LoadContext } from '../../context/LoadContext';

const CmpMsj = ({ msj, owner, id }) => {
  const { idLoadMsjIA } = useContext(LoadContext);
  return (
    <Row
      justify={owner === 'USER' ? 'end' : 'start'}
      style={{ margin: 0, width: '100%' }}
    >
      <Col xs={20} sm={18} md={16} lg={14} xl={12} className="chatMsjCnt">
        <Row align="top" className="chatMsjCnt" gutter={[8, 0]}>
          <Col>
            <Space direction="vertical" gap={8} align="flex-end">
              <Avatar
                icon={owner === 'USER' ? <UserOutlined /> : null}
                src={
                  owner !== 'USER'
                    ? 'https://img.icons8.com/?size=100&id=79UfeEN6JkZ8&format=png&color=000000'
                    : undefined
                }
                className="chatAvatar"
              />
              {idLoadMsjIA === id && (
                <SyncLoader
                  color="#056ABD"
                  size={'0.8rem'}
                  loading={owner !== 'USER'}
                  speedMultiplier={0.9}
                />
              )}
            </Space>
          </Col>
          {owner !== 'USER' ? (
            <>
              {idLoadMsjIA !== id && (
                <Col flex="auto" className="chatMsjCnt">
                  <Space direction="vertical" align="start" className="chatMsj">
                    <p>{owner}</p>
                    <Markdown msj={msj} />
                  </Space>
                </Col>
              )}
            </>
          ) : (
            <>
              {' '}
              <Col flex="auto" className="chatMsjCnt">
                <Space direction="vertical" align="start" className="chatMsj">
                  <p>{owner}</p>
                  <Markdown msj={msj} />
                </Space>
              </Col>
            </>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default CmpMsj;
