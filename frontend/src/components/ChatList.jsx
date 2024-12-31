import { Flex } from 'antd';
import { usechat } from '../context/chatContext';
import ChatMsj from './chatMsj';
const ChatList = () => {
  const { chat } = usechat();
  console.log(chat.msjs);

  return (
    <Flex
      direction="row"
      className="chathist"
      vertical
      justify="center"
      align="center"
      gap={8}
    >
      {chat.msjs.length > 0 ? (
        <>
          {chat.msjs.map(msj => (
            <ChatMsj key={msj.id} owner={msj.owner} msj={msj.content} />
          ))}
        </>
      ) : (
        <h1>¡Hola! ¿Cómo puedo ayudarte?</h1>
      )}
    </Flex>
  );
};

export default ChatList;
