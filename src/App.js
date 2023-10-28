import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


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
            <NavLink to="/" className="link-lista" activeClassName="link-ativo">Página Inicial</NavLink>
            <NavLink to="/servicos" className="link-lista" activeClassName="link-ativo">Serviços</NavLink>
            <NavLink to="/agenda" className="link-lista" activeClassName="link-ativo">Agenda</NavLink>
            <NavLink to="/quem-somos" className="link-lista" activeClassName="link-ativo">Quem Somos</NavLink>
          </div>


          {/*Login*/}

          <div className='login'>
            <i class="fa-solid fa-right-to-bracket" ></i>
          </div>
        </div>

      </nav>
      <div className="principal">

        {/*BANNER*/}

        <div className='banner'>
          <img src="/img/img-agenda-fundo.jpg" className="imagem-banner"></img>
          <div className='texto-banner'>
            <p className='texto-banner-primeiro'>Fazemos sua barba da maneira clássica:</p>
            <p className='texto-banner-segundo'>com navalha e toalha quente</p>
            <div className='banner-botao-container'>
              <Link to="/servicos" className="link-lista">
                <button className='banner-botao'>SERVIÇOS</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className='rodape'>
        <div className='rodape-icones'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className='rodape-copyright'>
          <p>© 2023 por A Barbearia da Vila. Orgulhosamente criado com LP Software</p>
        </div>
      </div>
    </div>

  );
}

export default App;
