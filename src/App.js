import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="navegacao">
        <nav id="navegacao-logo" className={isScrolled ? 'navegacao-escondida' : ''}>
          <p id="texto-logo">Barbearia Profissional</p>
          <div class="container" id="logo">
            <a class="navbar-brand" href="#" id="logo-txt">Barbearia da Vila </a>
            <img src="/img/barber-old.jpg" alt="Minha Imagem" id="logo-img" />
          </div>
          <p id="texto-logo-desde">desde 1996</p>
        </nav>
        <nav id="link-nav" className={isScrolled ? 'nav-fixa' : ''}>
          <div class="container-fluid" id="navegacao-link">
            <a class="navbar-brand" href="#" id="link-lista">Página Inicial</a>
            <a class="navbar-brand" href="#" id="link-lista">Serviços</a>
            <a class="navbar-brand" href="#" id="link-lista">Agenda</a>
            <a class="navbar-brand" href="#" id="link-lista">Quem Somos</a>
          </div>
          <div id="banner">
            <img src="/img/barnner-first.jpg" id="imagem-banner"></img>
          </div>
        </nav>
      </div>
      <div id="principal">
        <div id="produtos">
          <p id="produtos-titulo">Serviços</p>
          <div id="produtos-cards">
            <div id="cards">
              <div id="cards-img">
                <img src="/img/aparar.jpg" ></img>
              </div>
              <p id="titulo-card">Corte Tradicional</p>
              <p id="valor-card"> R$50,00</p>
              <div id="botao">
                <button id="botao-card">Agende agora!</button>
              </div>
            </div>
            <div id="cards">
              <div id="cards-img">
                <img src="/img/barba.jpg" ></img>
              </div>
              <p id="titulo-card">Barba</p>
              <p id="valor-card"> R$30,00</p>
              <div id="botao">
                <button id="botao-card">Agende agora!</button>
              </div>
            </div>
            <div id="cards">
              <div id="cards-img">
                <img src="/img/corte+barba.jpg" ></img>
              </div>
              <p id="titulo-card">Corte + Barba</p>
              <p id="valor-card"> R$65,00</p>
              <div id="botao">
                <button id="botao-card">Agende agora!</button>
              </div>
            </div>
          </div>
        </div>
        <div id="agenda">
          <p id="produtos-titulo"></p>
        </div>
        <div id="quem-somos">
          <p id="produtos-titulo"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
