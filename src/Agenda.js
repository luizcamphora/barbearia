import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MyCalendar from './MyCalendar';
import HourCheckbox from './HourCheckbox';


function SwitchComponent({ selectedOption, handleOptionSelect }) {
  return (
    <div className='agenda-swtich'>
      <p className='agenda-servico-titulo'>Selecione o Serviço</p>
      <div className='agenda-servico-corte'>
        <p className='agenda-servico-corte_txt'>Corte tradicional</p>
        <div className='agenda-servico-corte_preco-tempo'>
          <p className='agenda-servico-corte_preco'>R$ 35</p>
          <p className='agenda-servico-corte_tempo'>1h</p>
        </div>
        <label className='label-servico'>
          <input type="radio" name="switchOption" value="corte" checked={selectedOption === 'corte'} onChange={() => handleOptionSelect('corte')} />
        </label>
      </div>
      <div className='agenda-servico-barba'>
        <p className='agenda-servico-barba_txt'>Barba completa</p>
        <div className='agenda-servico-barba_preco-tempo'>
          <p className='agenda-servico-barba_preco'>R$ 30</p>
          <p className='agenda-servico-barba_tempo'>1h</p>
        </div>
        <label className='label-servico'>
          <input type="radio" name="switchOption" value="barba" checked={selectedOption === 'barba'} onChange={() => handleOptionSelect('barba')} />
        </label>
      </div>
      <div className='agenda-servico-corte-barba'>
        <p className='agenda-servico-corte-barba_txt'>Corte + Barba</p>
        <div className='agenda-servico-corte-barba_preco-tempo'>
          <p className='agenda-servico-corte-barba_preco'>R$ 50</p>
          <p className='agenda-servico-corte-barba_tempo'>1h e 30 min</p>
        </div>
        <label className='label-servico'>
          <input type="radio" name="switchOption" value="corte + barba" checked={selectedOption === 'corte + barba'} onChange={() => handleOptionSelect('corte + barba')} />
        </label>
      </div>
    </div>
  );
}

function Agenda() {
  const [selectedHours, setSelectedHours] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para rastrear a data selecionada


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
            <NavLink to="/" className="link-lista" activeClassName="link-ativo">Página Inicial</NavLink>
            <NavLink to="/servicos" className="link-lista" activeClassName="link-ativo">Serviços</NavLink>
            <NavLink to="/agenda" className="link-lista" activeClassName="link-ativo">Agenda</NavLink>
            <NavLink to="/quem-somos" className="link-lista" activeClassName="link-ativo">Quem Somos</NavLink>
          </div>
          <div className="login">
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
              <div className='agenda-horario_colunas'>
                <div  className='agenda-horario_primeira-coluna'>
                  <div className='primeiro-horario'>08:00</div>
                  <div className='segundo-horario'>09:00</div>
                  <div className='terceiro-horario'>10:00</div>
                  <div className='quarto-horario'>11:00</div>
                  <div className='quinto-horario'>12:00</div>
                </div>
                <div  className='agenda-horario_segunda-coluna'>
                  <div className='sexto-horario'>13:00</div>
                  <div className='setimo-horario'>14:00</div>
                  <div className='oitavo-horario'>15:00</div>
                  <div className='nono-horario'>16:00</div>
                  <div className='decimo-horario'>17:00</div>
                </div>
              </div>
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
