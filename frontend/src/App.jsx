import { useState } from 'react';
import { getChat } from './services/services.chatbot';
import './App.css';

function App() {
  const [promptResp, setPromptResp] = useState('');
  const handleSend = async () => {
    const prompt = document.getElementById('prompt').value;
    const respIA = await getChat(prompt);
    setPromptResp(respIA);
  };

  return (
    <>
      <p>{!promptResp ? 'Escribe tu prompt' : promptResp}</p>
      <br />
      <input type="text" name="name" id="prompt" />
      <button type="submit" onClick={handleSend}>
        Enviar
      </button>
    </>
  );
}

export default App;
