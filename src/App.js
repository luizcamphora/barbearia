import React, { useState, useEffect } from 'react';
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
      <div className="logotipo">
        <img src="/img/barber.PNG" alt="Minha Imagem" className='logotipo-banner-imagem' />
      </div>
      <nav className={isScrolled ? 'navegacao' : ''}>
        <div className='nav'>
          <div className='nav-fake'></div>
          <div className="navegacao-link">
            <a class="navbar-brand" href="#" className="link-lista">Página Inicial</a>
            <a class="navbar-brand" href="#" className="link-lista">Serviços</a>
            <a class="navbar-brand" href="#" className="link-lista">Agenda</a>
            <a class="navbar-brand" href="#" className="link-lista">Quem Somos</a>     
          </div>
          <div className='login'>
              <a class="navbar-brand" href="#" className="login-link">Login</a>
              <i class="fa-solid fa-right-to-bracket" ></i>
  
            </div>
        </div>


      </nav>
      <div className="principal"></div>

    </div>
  );
}

export default App;
