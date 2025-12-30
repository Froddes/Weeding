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

    // Refrescar AOS cuando se añade un invitado para que la nueva tarjeta anime
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
            <div data-aos="fade-up">
                <img src="/icons/flower-icon-01.png" alt="flower-01" />
                <h2>Confirmación de Asistencia</h2>
                <p>Tu presencia es nuestro mejor regalo. Utiliza este formulario para confirmar tu asistencia y la de tus <br /> acompañantes o familia.</p>
            </div>
            
            <form action="" method="post">
                {invitados.map((invitado, index) => (
                    <div 
                        className="form-card" 
                        key={invitado.id} 
                        style={{ marginBottom: '20px' }}
                        data-aos="fade-up"
                    >
                        <div className="header" style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <FaRegUser style={{ fontSize: '20px' }} />
                                <h4>Invitado {index + 1}</h4>
                            </div>
                            
                            {invitados.length > 1 && (
                                <FaRegTrashAlt 
                                    className="trash-icon" 
                                    onClick={() => removeInvitado(invitado.id)}
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <div className="name-input">
                                <label htmlFor={`name-${invitado.id}`}>Nombre Completo *</label>
                                <input type="text" id={`name-${invitado.id}`} name={`name-${invitado.id}`} placeholder="Nombre y Apellidos" required />
                            </div>
                            <div className="asist-input">
                                <label>¿Asistirá? *</label>
                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name={`asist-${invitado.id}`} value="yes" required />
                                        Sí, asistirá
                                    </label>
                                    <label>
                                        <input type="radio" name={`asist-${invitado.id}`} value="no" required />
                                        No podrá
                                    </label>
                                </div>
                            </div>
                            <div className="alger-input">
                                <label htmlFor={`alerg-${invitado.id}`}>
                                    <FaGlassMartiniAlt style={{ fontSize: '15px', margin: '0 5px' }} />
                                    Dieta / Alergias
                                </label>
                                <input type="text" id={`alerg-${invitado.id}`} name={`alerg-${invitado.id}`} placeholder="Vegano, Sin Gluten, etc" />
                            </div>
                        </div>
                    </div>
                ))}

                <div className="button-add" data-aos="fade-up">
                    <button className="add-person" type="button" onClick={addInvitado}>
                        <em>+</em>
                        Añadir otro invitado (Familiar/Pareja)
                    </button>
                </div>

                <div className="button-submit" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                    <button className="submit-form" type="submit">
                        Confirmar Asistencia para {invitados.length} {invitados.length === 1 ? 'Persona' : 'Personas'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Asistencia;