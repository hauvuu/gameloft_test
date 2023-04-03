import './App.css';
import StickyMenu from './Components/StickyMenu';
import Banner from './Components/Banner';
import ContactRegisterForm from './Components/ContactRegisterForm';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <Banner />
      <ContactRegisterForm />
      <Footer />
    </div>
  );
}

export default App;
