import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInbox } from 'react-icons/fa';

import './schedule.css';

export function Schedule() {
    return (
    <section className="schedule">
        <h3 className="titleSchedule">Agende um horário</h3>
        <form>
            <div className="container cont-form">
                <div className="row">
                    <div className="col-md-12">
                        <input placeholder="Seu Nome" />
                    </div>
                </div>
            </div>
            <div className="container cont-form">
                <div className="row">
                    <div className="col-md-6 cont-form">
                        <input type="phone" placeholder="Whatsapp" />
                    </div>
                    <div className="col-md-6 cont-form">
                        <input type="datetime" placeholder="Horário pretêndido" />
                    </div>
                </div>
                <button className="btn" type="submit">Solicitar</button>
                <h5 className="contatoWhats">Ou se preferir, entre em contato pelo whatsapp</h5>
            </div>
            
        </form>
        <a href="">
            <h5 className="contatoWhats"><FaWhatsapp size={30} /> Contato via whatsapp</h5>
        </a>
    </section>
    );
}