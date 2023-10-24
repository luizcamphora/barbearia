import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


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

      {/*Logotipo*/}

      <div className="logotipo">
        <img src="/img/barber.PNG" alt="Minha Imagem" className='logotipo-banner-imagem' />
      </div>

      <nav className={isScrolled ? 'navegacao' : ''}>
        <div className='nav'>
          <div className='nav-fake'></div>

          {/*Links*/}

          <div className="navegacao-link">
           <Link to="/" className="link-lista">Página Inicial</Link>
            <Link to="/servicos" className="link-lista">Serviços</Link>
            <Link to="/agenda" className="link-lista">Agenda</Link>
            <Link to="/quemsomos" className="link-lista">Quem Somos</Link>
          </div>

          {/*Login*/}

          <div className='login'>
            <a class="navbar-brand" href="#" className="login-link">Login</a>
            <i class="fa-solid fa-right-to-bracket" ></i>
          </div>
        </div>

      </nav>
      <div className="principal">

        {/*BANNER*/}

        <div className='banner'>
          <img src="/img/barnner-first.jpg" className="imagem-banner"></img>
        </div>

        {/*Título Serviços*/}

        <p className='servico-titulo'>Serviços</p>

        {/* CARDS */}

        <div className='servicos'>

          {/* primeiro card serviços */}

          <div className='servico-cards'>
            <div className='servico-cards-imagem'>
              <img src="/img/aparar.jpg" className='servico-cards-imagem__aparar'></img>
            </div>
            <p className="titulo-card">Corte tradicional</p>
            <p className="valor-card"> R$35,00</p>
            <div className="botao">
              <button className="botao-card">Agende agora!</button>
            </div>
          </div>

          {/* segundo card serviços */}

          <div className='servico-cards'>
            <div className='servico-cards-imagem'>
              <img src="/img/barba.jpg" className='servico-cards-imagem__aparar'></img>
            </div>
            <p className="titulo-card">Barba</p>
            <p className="valor-card"> R$20,00</p>
            <div className="botao">
              <button className="botao-card">Agende agora!</button>
            </div>
          </div>

          {/* terceiro card serviços */}

          <div className='servico-cards'>
            <div className='servico-cards-imagem'>
              <img src="/img/corte+barba.jpg" className='servico-cards-imagem__aparar'></img>
            </div>
            <p className="titulo-card">Corte + barba</p>
            <p className="valor-card"> R$50,00</p>
            <div className="botao">
              <button className="botao-card">Agende agora!</button>
            </div>
          </div>
        </div>

      </div>
      <div className='rodape'></div>
    </div>
  
  );
}

export default App;
