import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TextAnimated } from '../TextAnimated';

import logoImg from '../../assets/logo.svg';
import bannerImg from '../../assets/banner.png';

export function Banner() {
    function componentDidMount() {
        window.scrollTo(0, 1150)
    }

    return (
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
    );
}