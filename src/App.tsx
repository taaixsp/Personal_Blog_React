import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh'}}>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
        {/*     <Route path='/cadastro' element={<CadastrarUsuario/>}/> */}
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
