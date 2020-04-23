import React from 'react';
import { Link } from 'react-router-dom';

import './BannerTexts.css';

export default function BannerTexts()  {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <span>SPA &amp; SALÃO DE BELEZA</span>
                        <h2>Mostre seu empoderamento e surpreenda com a gente.</h2>
                        <p>Conte conosco para todos os serviços de beleza.</p>
                        <Link className="btn" href="https://leospa-react.themeies.com/">reserve now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}