import React, { useEffect } from 'react';
import './../css/Momentos.css';
// 1. Importamos AOS y sus estilos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Momentos() {
    const imagenes = Array.from({ length: 9 }, (_, i) => `/gallery/gallery (${i + 1}).webp`);

    // 2. Inicializamos AOS al cargar el componente
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
            once: true,     // La animación solo ocurre una vez
        });
    }, []);

    return (
        <div id="momentos">
            <div className="momentos-header" data-aos="fade-down">
                <img src="/icons/flower-icon-01.png" alt="flower-01" className="flower-divider" />
                <h2>Nuestros Momentos</h2>
                <p>Un pequeño recorrido por nuestra historia</p>
            </div>

            <div className="gallery-container">
                {imagenes.map((src, index) => (
                    <div 
                        key={index} 
                        className={`gallery-item item-${(index % 6) + 1}`}
                        // 3. Añadimos los atributos de animación
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Crea un efecto de cascada
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