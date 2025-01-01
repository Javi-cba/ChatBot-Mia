import { useState } from 'react';
import { Input } from 'antd';
import { getChat } from '../../services/services.chatbot';
import { createMessage } from '../../data/MensajeChat';
import '../../styles/chat.css';
import { usechat } from '../../context/chatContext';
import { useImg } from '../../context/imgFileContext';

const { Search } = Input;

const CmpInput = () => {
  const { uploadImage } = useImg();
  const { dispatch } = usechat();
  const [inputValue, setInputValue] = useState('');

  const handleSend = async (value) => {
    if (!value) return;
    let messageUSER = createMessage('USER', value);
    dispatch({ type: 'ADD_CHAT', payload: messageUSER });

    let imgURL = await uploadImage();
    const respIA = await getChat(value, imgURL);
    let messageIA = createMessage('IA', respIA);
    dispatch({ type: 'ADD_CHAT', payload: messageIA });

    setInputValue(''); // Limpia el estado del input
  };

  return (
    <Search
      placeholder="Escribe un prompt a Mía..."
      allowClear
      enterButton="Enviar"
      size="large"
      className="inputPrompt"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSearch={handleSend}
    />
  );
};

export default CmpInput;
