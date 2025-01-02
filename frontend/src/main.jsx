import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import { ChatProvider } from './context/chatContext';
import { ImgProvider } from './context/imgFileContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <ImgProvider>
        <Home />
      </ImgProvider>
    </ChatProvider>
  </StrictMode>
);
