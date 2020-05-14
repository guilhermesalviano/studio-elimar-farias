import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

import bannerImg from '../assets/banner.png';

export function Footer() {
    return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={bannerImg} width="142" />
                </div>
                <div className="col-md-2">
                    <h4>company</h4>
                    <ul className="navbar-nav">
                    <li><Link href="">Sobre</Link></li>
                    <li><Link href="">trabalhe Conosco</Link></li>
                    <li><Link href="">Imprensa</Link></li>
                    <li><Link href="">Novidades</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>comunidades</h4>
                    <ul className="navbar-nav">
                    <li><Link href="">Profissionais</Link></li>
                    <li><Link href="">Professores</Link></li>
                    <li><Link href="">Marcas</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>links uteis</h4>
                    <ul className="navbar-nav">
                    <li><Link href="">Ajuda</Link></li>
                    <li><Link href="">Presentes</Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>
                            <Link href=""><img src="imagens/facebook.png" /></Link>
                        </li>
                        <li>
                            <Link href=""><img src="imagens/twitter.png" /></Link>
                        </li>
                        <li>
                            <Link href=""><img src="imagens/instagram.png" /></Link>
                        </li>
                        <br />
                        <li>
                            <span className="copyright"><i className="far fa-envelope mr-1"></i>suporte@puzzlels.com</span>
                        </li>
                        </ul>
                        <br />
                        <ul className="list-inline quicklinks">
                    
                        <li className="list-inline-item">
                        Puzzle - <Link className="text-muted" href="http://api.whatsapp.com/send?1=pt_BR&phone=551195803-0103" alt="11 95803-0103" target="_blank"><i className="fab fa-whatsapp mr-3"></i>11 95803-0103</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
}