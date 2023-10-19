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
            <img src="/img/barber-old.jpg" alt="Minha Imagem" id="logo-img" />
          </div>
          <p id="texto-logo-desde">desde 1996</p>
        </nav>
        <nav id="link-nav">
          <div class="container-fluid" id="navegacao-link">
            <a class="navbar-brand" href="#" id="link-lista">Página Inicial</a>
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
