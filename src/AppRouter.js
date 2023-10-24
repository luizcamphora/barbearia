import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Agenda from './Agenda';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
