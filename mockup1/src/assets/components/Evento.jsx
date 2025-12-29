import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { FaRegHeart, FaRegClock, FaRegMap } from 'react-icons/fa';

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
        </div >
    )
}

export default Evento
