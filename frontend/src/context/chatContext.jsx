import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from 'react';

const ChatContext = createContext();

const ChatReducer = (chat, action) => {
  switch (action.type) {
    case 'ADD_CHAT': {
      // añadimos un nuevo Mensaje
      return {
        ...chat,
        msjs: [...chat.msjs, { ...action.payload }],
      };
    }

    case 'CLEAR_CHAT':
      return { msjs: [] }; // Reset chat data

    default:
      return chat;
  }
};

export const ChatProvider = ({ children }) => {
  const [chat, dispatch] = useReducer(ChatReducer, {
    msjs: [],
  });

  return (
    <ChatContext.Provider value={{ chat, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Hook para usar el contexto
export const usechat = () => {
  const { chat, dispatch } = useContext(ChatContext); // Access chat directly

  const getchat = () => {
    return chat.msjs; // Access msjs from chat
  };

  return { chat, dispatch, getchat };
};