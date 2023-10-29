import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function QuemSomos() {
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

        <div className="agenda-imagem">
          <img src="/img/img-agenda-fundo.jpg" className="agenda-imagem-fundo" alt="Imagem de Fundo da Agenda" />
        </div>
        <div className="overlay">
          <div className='quem-somos_img'>
            <img className='que-somos_img-arquivo' src='/img/barbearia.jpg'></img>
          </div>
          <div className='quem-somos_txt'>
            <p className='quem-somos_txt-titulo'>Nossa História</p>
            <p className='quem-somos_txt-paragrafo'>A Barbearia da Vila, fundada por Luiz Saar em 1982,
              é uma fusão de tradição e modernidade. Com cortes contemporâneos e uma abordagem rústica à
              barba, tornou-se um marco na comunidade. Seu avô, Luiz, dominava tanto técnicas tradicionais
              quanto as mais recentes tendências. O estabelecimento se destacou como um lugar de encontro,
              onde histórias eram compartilhadas.

              Hoje, você continua a tradição da Barbearia da Vila,
              honrando o legado de seu avô e proporcionando aos clientes uma experiência autêntica de
              barbearia. A essência do local permanece inalterada, preservando a história e o espírito
              de Luiz Saar, e criando um ambiente onde a tradição se encontra com a contemporaneidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuemSomos;
