import { useState, useContext } from 'react';
import { Input } from 'antd';
import { getChat } from '../../services/services.chatbot';
import { createMessage } from '../../data/MensajeChat';
import '../../styles/chat.css';
import { usechat } from '../../context/chatContext';
import { useImg } from '../../context/imgFileContext';
import { LoadContext } from '../../context/LoadContext';

const { Search } = Input;

const CmpInput = () => {
  const { setLoadingIA } = useContext(LoadContext);

  const { uploadImage } = useImg();
  const { dispatch } = usechat();
  const [inputValue, setInputValue] = useState('');

  const handleSend = async value => {
    if (!value) return;
    try {
      let messageUSER = createMessage('USER', value);
      setInputValue(''); // Limpia el estado del input

      dispatch({ type: 'ADD_CHAT', payload: messageUSER });

      let imgURL = await uploadImage();
      let messageIA = createMessage('IA', ''); // Mensaje temporal con contenido vacío
      setLoadingIA(messageIA.id); // Para q inicie el Loading

      dispatch({ type: 'ADD_CHAT', payload: messageIA });

      // Realiza la llamada al back
      const respIA = await getChat(value, imgURL);

      // Actualiza el mensaje temporal con la respuesta real de IA
      messageIA.content = respIA; // Actualiza el contenido del mensaje una vez que el back responde
      dispatch({ type: 'UPDATE_CHAT', payload: messageIA });
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoadingIA(null);
    }
  };

  return (
    <Search
      placeholder="Escribe un prompt a Mía..."
      allowClear
      enterButton="Enviar"
      size="large"
      className="inputPrompt"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onSearch={handleSend}
    />
  );
};

export default CmpInput;
