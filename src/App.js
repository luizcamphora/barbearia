import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navegacao">
        <nav class="navbar bg-body-tertiary" id="navegacao-logo">
          <p id="texto-logo">Barbearia Prossifional</p>
          <div class="container" id="logo">
            <a class="navbar-brand" href="#" id="logo-txt">Barbearia da Vila </a>
            <img src="/img/logo.jpg" alt="Minha Imagem" id="logo-img" />
          </div>
          <p id="texto-logo">desde 1996</p>
        </nav>
        <nav class="navbar bg-body-tertiary" >
          <div class="container-fluid" id="navegacao-link">
            <a class="navbar-brand" href="#" id="link-lista">Página Incial</a>
            <a class="navbar-brand" href="#" id="link-lista">Produtos</a>
            <a class="navbar-brand" href="#" id="link-lista">Agenda</a>
            <a class="navbar-brand" href="#" id="link-lista">Quem Somos</a>
          </div>
        </nav>
      </div>
      <div id="principal">
        <div id="banner">
        </div>
      </div>
    </div>
  );
}

export default App;
