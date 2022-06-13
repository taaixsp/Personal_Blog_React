import React from 'react';
import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import UserRegister from './pages/userRegister/UserRegister';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPost/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import {Provider} from 'react-redux';
import store from './store/Store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userregister' element={<UserRegister />} />
          <Route path="/themes" element={<ListaTema />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          {/*     <Route path='/cadastro' element={<CadastrarUsuario/>}/> */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
