import { Input } from 'antd';
const { Search } = Input;
import { getChat } from '../services/services.chatbot';
import { createMessage } from '../data/MensajeChat';
import '../styles/chat.css';
import { usechat } from '../context/chatContext';

const CmpSearch = () => {
  const { dispatch } = usechat();

  const handleSend = async value => {
    let messageUSER = createMessage('USER', value);
    dispatch({ type: 'ADD_CHAT', payload: messageUSER });

    const respIA = await getChat(value);
    let messageIA = createMessage('IA', respIA);
    dispatch({ type: 'ADD_CHAT', payload: messageIA });
  };

  return (
    <Search
      placeholder="Escribe un prompt a Mía..."
      allowClear
      enterButton="Enviar"
      size="large"
      className="inputPrompt"
      onSearch={handleSend}
    />
  );
};

export default CmpSearch;
