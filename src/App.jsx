import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Home from '@/pages/Home';
import Contacto from '@/pages/Contacto';
import Municipality from '@/pages/Municipality';
import Municipio from '@/pages/Municipio';
import Unidades from '@/pages/Unidades';

import '@/styles/index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/municipio" element={<Municipio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/municipality" element={<Municipality />} />
        <Route path="/unidades" element={<Unidades />} />
      </Routes>
    </Router>
  );
};

export default App;
