import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </React.Fragment>
  )
};

export default App;