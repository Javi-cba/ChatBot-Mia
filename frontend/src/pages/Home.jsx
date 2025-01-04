import CmpSearch from '../components/chatSearch/CmpSearch';
import ChatList from '../components/chatList/ChatList';
import '../styles/chat.css';
import Navbar from '../components/Nabvar';
import { initBackend } from '../services/services.chatbot';
import { useEffect } from 'react';

function Home() {
  // Esto es pq el backend esta desplegado en un host gratuitio y cuando se hace la primer petición suele estar demorado
  useEffect(() => {
    initBackend();
  }, []);

  return (
    <div className="chatbotContainer">
      <Navbar />
      <section className="chatContainer">
        <ChatList />
      </section>
      <section className="searchContainer">
        <CmpSearch />
      </section>
    </div>
  );
}

export default Home;
