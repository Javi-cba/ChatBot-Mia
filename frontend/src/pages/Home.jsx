import '../styles/chat.css';
import CmpSearch from '../components/CmpSearch';
import ChatList from '../components/ChatList';

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
