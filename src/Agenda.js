import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SwitchComponent() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='agenda-swtich'>
      {/* ... Conteúdo do SwitchComponent ... */}
      <p className='agenda-servico-titulo'>Selecione o Serviço</p>
      <div className='corte'>
        <div className='agenda-servico-aparar'>
          <img src='/img/womanglasses18_116013.ico' className='agenda-servico-img'></img>
        </div>
        <label className='label-servico'>
          <input
            type="radio"
            name="switchOption"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={() => handleOptionSelect('option1')}
          />
          Corte
        </label>
      </div>
      <div className='barba'>
        <div className='agenda-servico-aparar'>
          <img src='/img/womanglasses22_116009.ico' className='agenda-servico-img'></img>
        </div>
        <label className='label-servico'>
          <input
            type="radio"
            name="switchOption"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={() => handleOptionSelect('option2')}
          />
          Barba
        </label>
      </div>
      <div className='corte-barba'>
        <div className='agenda-servico-aparar'>
          <img src='/img/womanglasses21_116010.ico' className='agenda-servico-img' ></img>
        </div>
        <label className='label-servico'>
          <input
            type="radio"
            name="switchOption"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={() => handleOptionSelect('option3')}
          />
          Corte + barba
        </label>
      </div>
    </div>
  );
}

function Agenda() {
  return (
    <div className="Agenda">
      {/*Logotipo*/}
      <div className="logotipo">
        <img src="/img/barber.PNG" alt="Minha Imagem" className="logotipo-banner-imagem" />
      </div>
      {/*NavBar*/}
      <nav>
        <div className="nav">
          <div className="nav-fake"></div>

          {/* Links */}
          <div className="navegacao-link">
            <Link to="/" className="link-lista">
              Página Inicial
            </Link>
            <Link to="/" className="link-lista">
              Serviços
            </Link>
            <Link to="/agenda" className="link-lista">
              Agenda
            </Link>
            <Link to="/" className="link-lista">
              Quem Somos
            </Link>
          </div>

          {/*Login*/}
          <div className="login">
            <a class="navbar-brand" href="#" className="login-link">Login</a>
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </div>
      </nav>
      {/* ... Conteúdo Agenda ... */}
      <div className="agenda-conteudo">
        <div className="agenda-imagem">
          <img src="/img/img-agenda-fundo.jpg" className="agenda-imagem-fundo" alt="Imagem de Fundo da Agenda" />
        </div>
        <div className="overlay">
          <div className="agenda-servico">
            <SwitchComponent />
          </div>
          <div className="agenda-data"></div>
          <div className="agenda-horario"></div>
          <div className="agenda-detalhes"></div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
