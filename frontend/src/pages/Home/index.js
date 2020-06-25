import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Footer } from '../../components/Footer';
import { TextAnimated } from '../../components/TextAnimated';
import { Schedule } from '../../components/Schedule';


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
                    </div>
                    <div className="texts-container">
                        <div className="row">
                            <div className="banner-texts-content">
                                <span>Seja bem-vinda(o)!</span>
                                <h2>Ao site do Studio Elimar Farias</h2>
                                <TextAnimated />
                                <Link className="btn" to="/" onClick={componentDidMount()}>Agendar um horário</Link>
                                <div className="banner-icons">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SalaodeBelezaElimar"><FaFacebook size={30} value="#E5665A" /></a>
                                    <span></span>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/studioelimarfarias"><FaInstagram size={30} color="#E5665A" /></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="sec-heading">
                        <img className="logo-about" src={aboutImg} width="80px" alt="" />
                        <span className="preTitle">UM POUCO SOBRE NOSSA TRAJETÓRIA</span>
                        <h3>Conheça um pouco sobre a história de Elimar</h3>
                        <p>
                            Iniciei na área da beleza como Cabeleireira a 25 anos atrás e desde então venho me especializando. 
                            Já pude realizar diversos cursos, dentre eles, gosto bastante de citar o que foi ministrado pelo <strong>Rodrigo Cintra</strong>, <strong>Rose Valverde</strong> e pela <strong>Karina França</strong>.
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