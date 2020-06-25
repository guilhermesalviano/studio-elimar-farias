import React, { useState }  from 'react';
import { FaWhatsapp} from 'react-icons/fa';

import './schedule.css';

export function Schedule() {

    function generateDatesMonthsAfter() {
        const date = new Date();

        const today = date.toLocaleDateString().split('/');

        const daysPerMonth = {
            1 : 31,
            2 : (((date.getFullYear() % 4) === 0) ? '29' : '28'),
            3 : 31,
            4 : 30,
            5 : 31,
            6 : 30,
            7 : 31,
            8 : 31,
            9 : 30,
            10: 31,
            11: 30,
            12: 31
        }

        let months = parseInt(today[1]);
        let arrayDates = [];
        while (months < (parseInt(today[1])+2)){
            let day = 1;
            if (months === parseInt(today[1])){day = today[0]}
            for(; day <= daysPerMonth[months]; day++) {
                const newDay = new Date(today[2], (months-1), day);
                const actualDay = newDay.getDay();
                if(actualDay !== 0 && actualDay !== 1){
                    arrayDates.push(newDay.toLocaleDateString());
                }
            }
            months++;
        }
        return arrayDates;
    };

    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    function handleSchedule(e){
        e.preventDefault();
        if (!name) { alert('Adicione seu nome.'); return; }
        if (!service) { alert('Selecione um serviço.'); return; }
        if (!date) { alert('Selecione uma data.'); return; }
        if (!hour) { alert('Selecione uma hora.'); return; }
        const message = 'Olá, sou '+name+'. Desejo agendar um(a) '+service+' no dia '+date+' às '+hour+', é possível?';
        window.open('http://api.whatsapp.com/send?1=pt_BR&phone=5511973169581&text='+encodeURI(message));
    }

    return (
    <section className="schedule">
        <h3 className="titleSchedule">Agende um horário</h3>
        <form onSubmit={handleSchedule}>
            <div className="container cont-form">
                <div className="row">
                    <div className="col-md-6  cont-form">
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Seu Nome" />
                    </div>
                    <div className="col-md-6">
                        <select value={service} onChange={e => setService(e.target.value)} placeholder="Horário pretêndido" >
                            <option value="">Serviço</option>
                            <option value="Corte Feminino">Corte Feminino</option>
                            <option value="Corte Masculino">Corte Masculino</option>
                            <option value="Coloração">Coloração</option>
                            <option value="Cauterização">Cauterização</option>
                            <option value="Botox Capilar">Botox Capilar</option>
                            <option value="Plástica de fios">Plástica de fios</option>
                            <option value="Reconstrução Térmica">Reconstrução Térmica</option>
                            <option value="Outro Serviço">Outro</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container cont-form">
                <div className="row">
                    {/*<div className="col-md-6 cont-form">
                        <input type="phone" placeholder="Seu Whatsapp" />
                    </div>*/}
                    <div className="col-md-6 cont-form">
                        <select value={date} onChange={e => setDate(e.target.value)} placeholder="data pretêndida" >
                            <option value="">Data</option>
                            {generateDatesMonthsAfter().map((date) =>
                                <option key={date} value={date}>{date}</option>
                            )}
                            
                        </select>
                    </div>
                    <div className="col-md-6 cont-form">
                        <select value={hour} onChange={e => setHour(e.target.value)} placeholder="Horário pretêndido" >
                            <option value="">Hora</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                        </select>
                    </div>
                </div>
                {/*<h5 className="contatoWhats">Fique atento na confirmação de agendamento que você receberá via Whatsapp.</h5>*/}
                <button className="btn btn-schedule" type="submit"><FaWhatsapp size={30} /> Solicitar agendamento</button>
                {/*<h5 className="contatoWhats">Ou se preferir, entre em contato direto pelo Whatsapp.</h5>*/}
            </div>
        </form>
        {/*<a target="_blank" href="https://api.whatsapp.com/send?phone=5511973169581&text=Ol%C3%A1,+gostria+de+solicitar+um+agendamento+de+">
            <h5 className="contatoWhats"> Enviar Mensagem</h5>
        </a>*/}
    </section>
    );
}