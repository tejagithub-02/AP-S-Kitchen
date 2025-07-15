import React from 'react';
import Header from './components/Header'; // adjust path if needed
import Banner from './components/Banner';
import Mango from './components/Mango';
import Tomato from './components/Tomato';
import AboutUs from './components/AboutUs';
import Manufacturing from './components/Manufacturing';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsappButton from './components/WhatsappButton';


function App() {
  return (
    <div>
      <Preloader/>
      <Header />
      <Banner/>
      <Mango />
      <Tomato/>
      <AboutUs />
      <Manufacturing />
      <Footer />
      <WhatsappButton />
      {/* Add other content here */}
    </div>
  );
}

export default App;
