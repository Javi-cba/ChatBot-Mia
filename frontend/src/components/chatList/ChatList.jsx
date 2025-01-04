import React, { useEffect, useRef } from 'react';
import { Flex } from 'antd';
import { usechat } from '../../context/chatContext';
import CmpMsj from './CmpMsj';
const ChatList = () => {
  const { chat } = usechat();
  const messagesEndRef = useRef(null); // Ref para el final de los mensajes

  // Scroll al final cuando los mensajes cambian
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat.msjs]);

  return (
    <Flex direction="row" vertical justify="center" align="center" gap={8}>
      {chat.msjs.length > 0 ? (
        <>
          {chat.msjs.map(msj => (
            <CmpMsj
              key={msj.id}
              id={msj.id}
              owner={msj.owner}
              msj={msj.content}
            />
          ))}
        </>
      ) : (
        <div className="msjInitContainer">
          <h1 className="msjInit">¡Hola! ¿Cómo puedo ayudarte?</h1>
        </div>
      )}
      <div ref={messagesEndRef} /> {/* Elemento de referencia al final */}
    </Flex>
  );
};

export default ChatList;
