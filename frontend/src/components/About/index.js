import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/logo-about.svg';
// import './text-animated.css';

export function About() {
    return (
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
    );
}