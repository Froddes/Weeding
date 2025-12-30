import React, { useEffect } from 'react';
import { FaRegHeart, FaRegClock, FaRegMap } from 'react-icons/fa';
import Slider from './evento/Slider.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/Evento.css';

function Evento() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="evento">
            <img src="/icons/flower-icon-01.png" alt="flower-01" data-aos="fade-down" />
            <h2 data-aos="fade-down" data-aos-delay="200">Detalles del Evento</h2>

            <div className="card-container">
                <div className="card" data-aos="fade-right" data-aos-delay="400">
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

                <div className="card" data-aos="fade-left" data-aos-delay="600">
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

            <div
                className="map-wrapper"
                style={{ margin: '0 0 35px 0', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)' }}
                data-aos="zoom-in"
                data-aos-delay="800"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.327663364406!2d-5.99304918469363!3d37.38334467983287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1033a88673%3A0x6b69a3044f54452a!2sReal%20Alc%C3%A1zar%20de%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                    width="1000"
                    height="450"
                    style={{ border: 0 }}
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

export default Evento;