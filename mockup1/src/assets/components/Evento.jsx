import React from 'react'

import { FaRegHeart, FaRegClock, FaRegMap } from 'react-icons/fa';

import Slider from './evento/Slider.jsx';

import './../css/Evento.css';

function Evento() {
    return (
        <div id="evento">
            <img src="/icons/flower-icon-01.png" alt="flower-01" />
            <h2>Detalles del Evento</h2>
            <div className="card-container">
                <div className="card">
                    <h3><FaRegHeart style={{ fontSize: '24px' }} /> Ceremonia</h3>
                    <div className="hora">
                        <FaRegClock style={{ fontSize: '20px', color: '#c78665' }} />
                        <div className="content">
                            <p>18:00 horas</p>
                            <span>Por favor, llegar 15 minutos antes</span>
                        </div>
                    </div>
                    <div className="lugar">
                        <FaRegMap style={{ fontSize: '20px', color: '#c78665' }} />
                        <div className="content">
                            <p>Real Alcázar de Sevilla</p>
                            <span>Patio de Banderas, s/n <br /> 41004 Sevilla, España</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3><FaRegHeart style={{ fontSize: '24px' }} /> Celebración</h3>
                    <div className="hora">
                        <FaRegClock style={{ fontSize: '20px', color: '#c78665' }} />
                        <div className="content">
                            <p>20:00 horas</p>
                            <span>Cena, baile y diversión hasta la madrugada</span>
                        </div>
                    </div>
                    <div className="lugar">
                        <FaRegMap style={{ fontSize: '20px', color: '#c78665' }} />
                        <div className="content">
                            <p>Real Alcázar de Sevilla</p>
                            <span>Jardines del Alcázar <br /> 41004 Sevilla, España</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-wrapper" style={{ margin: '0 0 50px 0'}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.1915995405!2d-5.993439023455982!3d37.38350033446868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c103398934b%3A0x679693959c8849b!2sReal%20Alc%C3%A1zar%20de%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                    width="1000"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Real Alcázar"
                ></iframe>
            </div>
            <Slider />
        </div >
    )
}

export default Evento
