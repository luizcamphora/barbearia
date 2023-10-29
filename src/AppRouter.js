import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Agenda from './Agenda';
import Servicos from './Servicos';
import QuemSomos from './QuemSomos';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
