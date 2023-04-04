import './App.css';
import StickyMenu from './Components/StickyMenu';
import Banner from './Components/Banner';
import ContactRegisterForm from './Components/ContactRegisterForm';
import Footer from './Components/Footer';
import GameContent from './Components/GameContent';
import EventPromotion from './Components/EventPromotion';
// import SampleSlick from './Components/SampleSlick';

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <Banner />
      <ContactRegisterForm />
      <EventPromotion />
      <GameContent />
      <Footer />
    </div>
  );
}

export default App;
