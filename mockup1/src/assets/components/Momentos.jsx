import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/Momentos.css';

function Momentos() {
    const imagenes = Array.from({ length: 10 }, (_, i) => `/gallery/gallery (${i + 1}).webp`);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="momentos">
            <div className="momentos-header">
                <img 
                    src="/icons/flower-icon-01.png" 
                    alt="flower-01" 
                    className="flower-divider" 
                    data-aos="fade-down"
                />
                <h2 data-aos="fade-down" data-aos-delay="200">Nuestros Momentos</h2>
                <p data-aos="fade-up" data-aos-delay="400">Un pequeño recorrido por nuestra historia</p>
            </div>

            <div className="gallery-container">
                {imagenes.map((src, index) => (
                    <div 
                        key={index} 
                        className={`gallery-item item-${(index % 6) + 1}`}
                    >
                        <img 
                            src={src} 
                            alt={`Momento ${index + 1}`} 
                            loading="lazy" 
                        />
                        <div className="overlay"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Momentos;