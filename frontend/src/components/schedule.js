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
                    <div className="col-md-6  cont-form">
                        <input placeholder="Seu Nome" />
                    </div>
                    <div className="col-md-6">
                        <select name="service" placeholder="Horário pretêndido" >
                            <option value="serviço">Serviço</option>
                            <option value="Corte Feminino">Corte Feminino</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container cont-form">
                <div className="row">
                    <div className="col-md-6 cont-form">
                        <input type="phone" placeholder="Seu Whatsapp" />
                    </div>
                    <div className="col-md-3 cont-form">
                        <select name="day" placeholder="Horário pretêndido" >
                            <option value="data">Data</option>
                            <option value="27/05/2020">27/05/2020</option>
                        </select>
                    </div>
                    <div className="col-md-3 cont-form">
                        <select name="hour" placeholder="Horário pretêndido" >
                            <option value="Hora">Hora</option>
                            <option value="13:00">13:00</option>
                        </select>
                    </div>
                </div>
                <h5 className="contatoWhats">Fique atento na confirmação de agendamento que você receberá via Whatsapp.</h5>
                <button className="btn" type="submit">Solicitar</button>
                <h5 className="contatoWhats">Ou se preferir, entre em contato direto pelo Whatsapp.</h5>
            </div>
            
        </form>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5511973169581&text=Ol%C3%A1,+gostria+de+solicitar+um+agendamento+de+">
            <h5 className="contatoWhats"><FaWhatsapp size={30} /> Enviar Mensagem</h5>
        </a>
    </section>
    );
}