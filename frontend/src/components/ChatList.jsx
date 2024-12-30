import { usechat } from '../context/chatContext';

const ChatList = () => {
  const { chat } = usechat();
  console.log(chat.msjs);

  return (
    <div className="chatListContainer">
      {chat.msjs.length > 0 ? (
        <>
          {chat.msjs.map(msj => (
            <div key={msj.id}>
              <p>{msj.owner}</p>
              <p>{msj.content}</p>
            </div>
          ))}
        </>
      ) : (
        <h1>¡Hola! ¿Cómo puedo ayudarte?</h1>
      )}
    </div>
  );
};

export default ChatList;
