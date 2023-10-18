import { Button } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="navegacao">
        <nav id="navegacao-logo">
        <p id="texto-logo">Barbearia Profissional</p>    
          <div class="container" id="logo">
            <a class="navbar-brand" href="#" id="logo-txt">Barbearia da Vila </a>
            <img src="/img/logo.jpg" alt="Minha Imagem" id="logo-img" />
          </div>
          <p id="texto-logo-desde">desde 1996</p>
        </nav>
        <nav id="link-nav">
          <div class="container-fluid" id="navegacao-link">
            <a class="navbar-brand" href="#" id="link-lista">Página Incial</a>
            <a class="navbar-brand" href="#" id="link-lista">Serviços</a>
            <a class="navbar-brand" href="#" id="link-lista">Agenda</a>
            <a class="navbar-brand" href="#" id="link-lista">Quem Somos</a>
          </div>
        </nav>
      </div>
      <div id="principal">
        <div id="banner">
          <img src="/img/barnner-first.jpg" id="imagem-banner"></img>
        </div>
          <div id="produtos">
            <p id="produtos-titulo">Serviços</p>
            <div id="produtos-cards">
              <div id="cards"> 
                <div id="cards-img">
                  <img src="/img/aparar.jpg" ></img>
                </div>
                <p>Corte Tradicional</p>
                <p>R$ 50,00</p>
                <button>Agendar</button>
              </div>
              <div id="cards"> 
              </div>
              <div id="cards"> 
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
