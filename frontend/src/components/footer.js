import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInbox } from 'react-icons/fa';

import './footer.css';

import bannerImg from '../assets/banner.png';

export function Footer() {
    return (
    <section className="footer">
        <div className="container">
            <div className="row">
                { /*<div className="col-md-8 imagem-rodape">
                    <img src={bannerImg} width="142" />
                </div>*/ }
                <div className="col-md-12 about-me colunm">
                    <div className="contacts">
                    © Studio Elimar Farias, 2020. Todos os direitos reservados.
                    </div>
                </div>


                { /*<div className="col-md-4 about-me">
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
                    </ul>
                    <div className="contacts">
                        Contatos: <br />
                        <FaInbox size={20} /><a href="mailto:guilherme.salviano12@outlook.com" target="_blank"> guilherme.salviano12@outlook.com</a>
                        <br />
                        <FaWhatsapp size={20} /><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511948449969&text=Olá+Guilherme,+consegui+seu+contato+através+da+pagina+'Studio+Elimar+Farias'..." alt="" target="_blank"> (11) 94844-9969</a>
                    </div>
                </div>*/ }
            </div>
            <div className="row">
                <div className="col-md-12 colunm">
                    Desenvolvido por <br />
                    <span className="signature">Guilherme F Salviano</span><br />
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511948449969&text=Ol%C3%A1,+Guilherme.+Gostaria+de+solicitar+um+servi%C3%A7o+de+">
                        <FaWhatsapp size={30} />
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}