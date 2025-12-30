import React, { useEffect } from 'react';
import Countdown from './banner/Countdown.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/Banner.css';

function Banner() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <div id="banner">
            <div className="filter">
                <p data-aos="fade-down" data-aos-delay="200">¡Nos Casamos!</p>
                <h1 data-aos="zoom-in" data-aos-delay="400">Laura & Fran</h1>
                <h3 data-aos="fade-up" data-aos-delay="600">- 4 de Junio 2026 -</h3>
                <div data-aos="fade-up" data-aos-delay="800">
                    <Countdown />
                </div>
            </div>
        </div>
    );
}

export default Banner;