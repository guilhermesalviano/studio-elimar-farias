import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Footer } from '../../components/footer';
import { TextAnimated } from '../../components/text-animated';


import './styles.css';

import logoImg from '../../assets/logo.png';
import bannerImg from '../../assets/banner.png';

export default function Home() {

    return (
        <div className="home">
            <div className="home-container">
                <section className="banner-content">
                    <img className="banner-image" src={bannerImg} alt="" />
                    <div className="header">
                        <img className="logo" src={logoImg} alt="" />
                        <nav className="nav navbar navbar-expand-lg navbar-light ">
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
                        </nav>
                    </div>
                    <div className="texts-container">
                        <div className="row">
                            <div className="banner-texts-content">
                                <span>Seja bem-vinda!</span>
                                <h2>Conhaça o Studio Elimar Farias</h2>
                                <TextAnimated />
                                <Link className="btn" to="https://leospa-react.themeies.com/">Ver serviços</Link>
                                <div className="banner-icons">
                                    <FaFacebook size={30} value="#E5665A" />
                                    <span></span>
                                    <FaInstagram size={30} color="#E5665A" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="sec-heading">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABGCAYAAABSdbNRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZThjMTE2MS05YjA5LTQ0ODMtOTRjMy0xMzViNzE4OTNlODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUUwMEJCRThBNEFCMTFFOUE3MEJCNEUyRThFRjVDNkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUUwMEJCRTdBNEFCMTFFOUE3MEJCNEUyRThFRjVDNkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjZiZTlhY2QtNzMyMC05OTQ4LWI3Y2QtMjhlM2U2YmVlMDIwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2E5MTE1ZjgtNzg3MS0xMTdiLWIzNjYt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" alt=""></img>
                        <span className="preTitle">UM POUCO SOBRE NOSSA TRAJETÓRIA</span>
                        <h3>Descubra os passos da profissional que dá nome ao nosso Studio!</h3>
                        <p>
                            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <Link className="btn btn-round" to="https://leospa-react.themeies.com/about">Ler mais</Link>
                </section>
                <section className="feedback">

                </section>
            </div>
            <Footer />
        </div>
    );
}