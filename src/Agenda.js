import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link desta forma
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Agenda() {
  return (
    <div className="Agenda">
      {/* ... Seu conteúdo da Agenda ... */}
      <nav>
        <div className='nav'>
          <div className='nav-fake'></div>

          {/* Links */}
          <div className="navegacao-link">
            <Link to="/" className="link-lista">Página Inicial</Link>
            <Link to="/servicos" className="link-lista">Serviços</Link>
            <Link to="/agenda" className="link-lista">Agenda</Link>
            <Link to="/quemsomos" className="link-lista">Quem Somos</Link>
          </div>

          {/* ... Outro conteúdo ... */}
        </div>
      </nav>
      {/* ... Outro conteúdo ... */}
    </div>
  );
}

export default Agenda;
