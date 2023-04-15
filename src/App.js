
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import MarketPlace from './components/MarketPlace';
import DevDocs from './components/DevDocs';
import Testmonials from './components/Testmonials';
import Faq from './components/Faq';
import SuccessStory from './components/SuccessStory';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <MarketPlace/>
      <DevDocs/>
      <Testmonials/>
      <Faq/>
      <SuccessStory/>
      <Footer/>
    </div>
  );
}

export default App;
