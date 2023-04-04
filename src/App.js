import './App.css';
import StickyMenu from './Components/StickyMenu';
import Banner from './Components/Banner';
import ContactRegisterForm from './Components/ContactRegisterForm';
import Footer from './Components/Footer';
import GameContent from './Components/GameContent';
import EventPromotion from './Components/EventPromotion';
import GameCommunity from './Components/GameCommunity';
import StickySocial from './Components/StickySocial';

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <Banner />
      <ContactRegisterForm />
      <GameCommunity />
      <EventPromotion />
      <GameContent />
      <Footer />
      <StickySocial />
    </div>
  );
}

export default App;
