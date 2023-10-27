import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyCalendar from './MyCalendar';
import HourCheckbox from './HourCheckbox';


function SwitchComponent({ selectedOption, handleOptionSelect }) {
  return (
    <div className='agenda-swtich'>
      {/* ... Conteúdo do SwitchComponent ... */}
      <p className='agenda-servico-titulo'>Selecione o Serviço</p>
      <div className='corte'>
        <div className='agenda-servico-aparar'>
          <img src='/img/womanglasses18_116013.ico' className='agenda-servico-img' alt="Ícone" />
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
          <img src='/img/womanglasses22_116009.ico' className='agenda-servico-img' alt="Ícone" />
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
           <img src='/img/womanglasses21_116010.ico' className='agenda-servico-img' alt="Ícone" />
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
  const [selectedHours, setSelectedHours] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para rastrear a data selecionada

  const handleHourToggle = (hour) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours([]);
    } else {
      setSelectedHours([hour]);
    }
  };

  const hours = Array.from({ length: 9 }, (_, i) => i + 10);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date); // Atualiza o estado com a data selecionada
  };

  return (
    <div className="Agenda">
      <div className="logotipo">
        <img src="/img/barber.PNG" alt="Minha Imagem" className="logotipo-banner-imagem" />
      </div>
      <nav>
        <div className="nav">
          <div className="nav-fake"></div>
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
          <div className="login">
            <a class="navbar-brand" href="#" className="login-link">Login</a>
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
        </div>
      </nav>
      <div className="agenda-conteudo">
        <div className="agenda-imagem">
          <img src="/img/img-agenda-fundo.jpg" className="agenda-imagem-fundo" alt="Imagem de Fundo da Agenda" />
        </div>
        <div className="overlay">
          <div className="agenda-servico">
            <SwitchComponent selectedOption={selectedOption} handleOptionSelect={handleOptionSelect} />
          </div>
          <div className="agenda-data">
            <p className='agenda-servico-titulo'>Selecione a data</p>
            <MyCalendar onDateChange={handleDateSelect} />
          </div>
          <div className="agenda-horario">
            <p className='agenda-servico-titulo'>Selecione o horário</p>
            {hours.map((hour) => (
              <HourCheckbox
                key={hour}
                hour={hour}
                selected={selectedHours.includes(hour)}
                onHourToggle={handleHourToggle}
              />
            ))}
            <div></div>
          </div>
          <div className="agenda-detalhes">
            <p className='agenda-servico-titulo'>Detalhes do atendimento</p>
            <p>Serviço: {selectedOption}</p>
            <div>Data Selecionada: {selectedDate && selectedDate.toDateString()}</div>
            <p>Horário: {selectedHours.join(', ')} horas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
