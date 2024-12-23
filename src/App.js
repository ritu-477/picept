
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import AiTrust from './components/AiTrust';
import AiWithout from './components/AiWithout';
import EndToEnd from './components/EndToEnd';
import Hero from './components/Hero';
import Mission from './components/Mission';
import PiceptDelivers from './components/PiceptDelivers';
import PiceptPricing from './components/PiceptPricing';
import PiceptRated from './components/PiceptRated';
import RequestThrough from './components/RequestThrough';
import SmartRouting from './components/SmartRouting';
import Trusted from './components/Trusted';
import TrustThrough from './components/TrustThrough';
import Unmatched from './components/Unmatched';
import GetTouch from './components/GetTouch';


function App() {
  return (
    <>
      <Hero />
      <Trusted /> 
      <RequestThrough />
      <TrustThrough />
      <Mission />
      <SmartRouting />
      <AiWithout />
      <Unmatched />
      <AiTrust />
      <EndToEnd />
      <PiceptDelivers />
      <PiceptRated />
      <PiceptPricing />
      <GetTouch />
      <Footer/> 
    </>
  );
}

export default App;
