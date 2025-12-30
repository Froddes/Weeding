import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/History.css';

function History() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <div id="history">
            <div className="description" data-aos="fade-up">
                <img src="/icons/flower-icon-01.png" alt="flower-01" />
                <h2>Nuestra Historia</h2>
                <p>
                    Laura, con su risa contagiosa, conoció a Fran, de mirada profunda y tranquila, en un café un lluvioso martes. 
                    Lo que empezó como una conversación casual sobre libros y viajes, pronto se transformó en tardes interminables 
                    y paseos bajo las estrellas. Descubrieron un amor forjado en pequeñas complicidades, grandes sueños y la 
                    certeza de haber encontrado, el uno en el otro, su lugar en el mundo. Hoy, cada día es una nueva página en 
                    su aventura compartida.
                </p>
            </div>

            <div className="they">
                <div className="person" data-aos="fade-right" data-aos-delay="200">
                    <h3>Laura</h3>
                    <p>
                        Laura es una persona llena de vida y alegría. Su pasión por la fotografía y su amor por los animales 
                        la hacen única. Siempre está dispuesta a ayudar a los demás y su sonrisa ilumina cualquier habitación.
                    </p>
                </div>

                <img 
                    src="/images/couple.png" 
                    alt="Laura y Fran" 
                    data-aos="zoom-in" 
                    data-aos-delay="400"
                />

                <div className="person" data-aos="fade-left" data-aos-delay="600">
                    <h3>Fran</h3>
                    <p>
                        Fran es un amante de la música y la naturaleza. Su sentido del humor y su dedicación a sus amigos y 
                        familia lo convierten en una persona muy especial. Siempre busca nuevas experiencias y aventuras para compartir.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default History;