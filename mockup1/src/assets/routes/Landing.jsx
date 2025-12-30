import React from 'react'

import Banner from './../components/Banner.jsx';
import History from './../components/History.jsx';
import Cita from './../components/Cita.jsx';
import Evento from './../components/Evento.jsx';
import Asistencia from './../components/Asistencia.jsx';
import Momentos from './../components/Momentos.jsx';
import Footer from './../components/Footer.jsx';

function Landing() {
    return (
        <>
            <Banner />
            <History />
            <Cita />
            <Evento />
            <Asistencia />
            <Momentos />
            <Footer />
        </>
    )
}

export default Landing
