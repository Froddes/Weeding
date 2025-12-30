import React, { useState, useEffect } from 'react';
import { FaRegUser, FaGlassMartiniAlt, FaRegTrashAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/Asistencia.css';

function Asistencia() {
    const [invitados, setInvitados] = useState([{ id: Date.now() }]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [invitados]);

    const addInvitado = () => {
        setInvitados([...invitados, { id: Date.now() }]);
    };

    const removeInvitado = (id) => {
        if (invitados.length > 1) {
            setInvitados(invitados.filter(invitado => invitado.id !== id));
        }
    };

    return (
        <div id="asistencia">
            <div data-aos="fade-up" className="asistencia-intro">
                <img src="/icons/flower-icon-01.png" alt="flower-01" />
                <h2>Confirmación de Asistencia</h2>
                <p>Tu presencia es nuestro mejor regalo. Utiliza este formulario para confirmar tu asistencia.</p>
            </div>
            
            <form action="" method="post">
                {invitados.map((invitado, index) => (
                    <div className="form-card" key={invitado.id} data-aos="fade-up">
                        <div className="header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaRegUser />
                                <h4>Invitado {index + 1}</h4>
                            </div>
                            {invitados.length > 1 && (
                                <FaRegTrashAlt className="trash-icon" onClick={() => removeInvitado(invitado.id)} />
                            )}
                        </div>

                        <div className="form-group">
                            <div className="input-block">
                                <label>Nombre Completo *</label>
                                <input type="text" placeholder="Nombre y Apellidos" required />
                            </div>
                            
                            <div className="input-block">
                                <label>¿Asistirá? *</label>
                                <div className="radio-group">
                                    <label><input type="radio" name={`asist-${invitado.id}`} value="yes" required /> Sí</label>
                                    <label><input type="radio" name={`asist-${invitado.id}`} value="no" required /> No</label>
                                </div>
                            </div>

                            <div className="input-block">
                                <label><FaGlassMartiniAlt /> Dieta / Alergias</label>
                                <input type="text" placeholder="Vegano, Sin Gluten, etc" />
                            </div>
                        </div>
                    </div>
                ))}

                <button className="add-person" type="button" onClick={addInvitado}>
                    + Añadir otro invitado
                </button>

                <button className="submit-form" type="submit">
                    Confirmar Asistencia
                </button>
            </form>
        </div>
    );
}

export default Asistencia;