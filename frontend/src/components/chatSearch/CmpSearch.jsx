import CmpInput from './CmpInput';
import '../../styles/chat.css';
import CmpUpload from './CmpUpload';
import { Space } from 'antd';

const CmpSearch = () => {
  return (
    <Space gap={8}>
      <CmpUpload />
      <CmpInput />
    </Space>
  );
};

export default CmpSearch;
