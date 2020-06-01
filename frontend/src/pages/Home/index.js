import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Footer } from '../../components/footer';
import { TextAnimated } from '../../components/text-animated';
import { Schedule } from '../../components/schedule';


import './styles.css';

import logoImg from '../../assets/logo.svg';
import aboutImg from '../../assets/logo-about.svg';
import bannerImg from '../../assets/banner.png';

export default function Home() {
    function componentDidMount() {
        window.scrollTo(0, 1150)
    }

    return (
        <div className="home">
            <div className="home-container">
                <section className="banner-content">
                    <img className="banner-image" src={bannerImg} alt="" />
                    <div className="header">
                        <img className="logo" src={logoImg} alt="" />
                        {/*<nav className="nav navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" href="#">Sobre<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" href="#">Agendamentos<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" href="#">Contatos<span className="sr-only">(current)</span></Link>
                                </li>
                                </ul>
                            </div>
                        </nav>*/}
                    </div>
                    <div className="texts-container">
                        <div className="row">
                            <div className="banner-texts-content">
                                <span>Seja bem-vinda(o)!</span>
                                <h2>Ao site do Studio Elimar Farias</h2>
                                <TextAnimated />
                                <Link className="btn" to="/" onClick={componentDidMount()}>Agendar um horário</Link>
                                <div className="banner-icons">
                                    <a target="_blank" href="https://www.facebook.com/SalaodeBelezaElimar"><FaFacebook size={30} value="#E5665A" /></a>
                                    <span></span>
                                    <a target="_blank" href="https://www.instagram.com/studioelimarfarias"><FaInstagram size={30} color="#E5665A" /></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="sec-heading">
                        <img className="logo-about" src={aboutImg} width="80px" alt="" />
                        <span className="preTitle">UM POUCO SOBRE NOSSA TRAJETÓRIA</span>
                        <h3>Conheça nossa trajetória</h3>
                        <p>
                        Lorem ipsum mi torquent mi risus porta varius egestas varius, imperdiet adipiscing lorem at ipsum quam ante ipsum, nibh curabitur scelerisque elementum class cubilia luctus gravida.
                        </p>
                    </div>
                    <Link className="btn btn-round" to="/"  onClick={() => {alert('Desculpe. Página com mais informações em desenvolvimento.')}}>Ler mais</Link>
                </section>
                <section className="feedback">

                </section>
                <Schedule />
            </div>
            <Footer />
        </div>
    );
}