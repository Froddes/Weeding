import React from 'react'

import Countdown from './banner/Countdown.jsx';

import './../css/Banner.css';

function Banner() {
    return (
        <div id="banner">
            <div className="filter">
                <p>¡Nos Casamos!</p>
                <h1>Laura & Fran</h1>
                <h3>- 4 de Junio 2026 -</h3>
                <Countdown />
            </div>
        </div>
    )
}

export default Banner
