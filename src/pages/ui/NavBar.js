import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar()  {
    return(
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">Sobre</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">Agendamentos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">Contatos</Link>
            </li>
        </ul>
    );
}