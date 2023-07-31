import React from 'react';
import './assets/css/App.css';
import './assets/js/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './router/home';
import Profile from './router/Profile';
import Sobre from './router/Sobre';
import Cadastro from './router/Cadastro';
import Login from './router/Login';
import Suporte from './router/Suporte';
import Pacotes from './router/Pacotes';
import Contato from './router/Contato';
import Politica from './router/Politica';
import Termos from './router/Termos';
import NotFound from './err/NotFound';
import Navigation from './interface/Navigation';
import NavMobile from './interface/NavMobile';
import Footer from './interface/Footer';
import ScrollToTopButton from './assets/js/ScrollToTopButton';
import Modal from './controller/modal';

function App() {
  return (
    <Router>
      <NavMobile />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Router path="/sobre" element={<Sobre />} />
        <Router path="/cadastro" element={<Cadastro />} />
        <Router path="/login" element={<Login />} />
        <Router path="/suporte" element={<Suporte />} />
        <Router path="/pacotes" element={<Pacotes />} />
        <Router path="/contato" element={<Contato />} />
        <Router path="/politica" element={<Politica />} />
        <Router path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <Modal />
    </Router>
  );
}

export default App;
