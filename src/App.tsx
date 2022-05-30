import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
  <>
  <Navbar />
    <Home />
    <Footer />
  </>
  );
}

export default App;
