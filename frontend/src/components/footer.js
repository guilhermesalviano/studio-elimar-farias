import React from 'react';
import { FaWhatsapp} from 'react-icons/fa';

import './footer.css';

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
                <div className="col-md-12 colunm credits-icon">
                    Logo e icone do sobre por <a target="_blank" rel="noopener noreferrer"  href="https://stock.adobe.com/br/contributor/208423244/new-tropical?asset_id=278113932">New tropical</a>.
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 colunm">
                    Site desenvolvido por <br />
                    <a target="_blank" rel="noopener noreferrer" href="https://guilhermesalviano.now.sh?utm_source=studioelimar&utm_medium=site&utm_campaign=signature">
                        <span className="signature">Guilherme F Salviano</span><br />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511948449969&text=Ol%C3%A1,+Guilherme.+">
                        <FaWhatsapp size={30} />
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}