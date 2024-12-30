import CmpSearch from '../components/CmpSearch';
import ChatList from '../components/ChatList';
import '../styles/chat.css';

function Home() {
  return (
    <div className="chatbotContainer">
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
