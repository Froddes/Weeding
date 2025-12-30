import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/Cita.css';

function Cita() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="cita">
            <img 
                src="/icons/quote-icon.png" 
                alt="Decorative" 
                className="quote-icon" 
                data-aos="fade-right"
                data-aos-delay="200"
            />
            
            <div className="cita-container" data-aos="zoom-in" data-aos-delay="400">
                <h2>"Es Mejor Haber Amado Y Perdido <br /> Que Nunca Haber Amado."</h2>
                <p>- ROBERT PATTERSON -</p>
            </div>
            
            <img 
                src="/icons/quote-icon-2.png" 
                alt="Decorative" 
                className="quote-icon-2" 
                data-aos="fade-left"
                data-aos-delay="600"
            />
        </div>
    );
}

export default Cita;