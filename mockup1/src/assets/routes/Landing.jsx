import React from 'react'

import Banner from './../components/Banner.jsx';
import History from './../components/History.jsx';
import Cita from './../components/Cita.jsx';
import Evento from './../components/evento.jsx';

function Landing() {
    return (
        <>
            <Banner />
            <History />
            <Cita />
            <Evento />
        </>
    )
}

export default Landing
