import CmpSearch from '../components/chatSearch/CmpSearch';
import ChatList from '../components/chatList/ChatList';
import '../styles/chat.css';
import Navbar from '../components/Nabvar';

function Home() {
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
