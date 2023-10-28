import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Servicos() {
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
                        <div className="navegacao-link">
                            <NavLink to="/" className="link-lista" activeClassName="link-ativo">Página Inicial</NavLink>
                            <NavLink to="/servicos" className="link-lista" activeClassName="link-ativo">Serviços</NavLink>
                            <NavLink to="/agenda" className="link-lista" activeClassName="link-ativo">Agenda</NavLink>
                            <NavLink to="/quem-somos" className="link-lista" activeClassName="link-ativo">Quem Somos</NavLink>
                        </div>
                    </div>

                    {/*Login*/}

                    <div className='login'>
                        <i class="fa-solid fa-right-to-bracket" ></i>
                    </div>
                </div>

            </nav>
            <div className="principal">


                <div className="agenda-imagem">
                    <img src="/img/img-agenda-fundo.jpg" className="agenda-imagem-fundo" alt="Imagem de Fundo da Agenda" />
                </div>

                <div className="overlay">

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
        </div>

    );
}

export default Servicos;
