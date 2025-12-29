  import React from 'react';
import Countdown from 'react-countdown';

// Componente visual para cada círculo
const DateTimeUnit = ({ value, label }) => (
  <div style={{
    background: '#c786652c', // Fondo oscuro traslúcido
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'sans-serif'
  }}>
    <span style={{ fontSize: '2.5rem', fontWeight: '300' }}>{value}</span>
    <span style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{label}</span>
  </div>
);

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>¡Llegó el día!</span>;
  } else {
    return (
      <div style={{ display: 'flex', gap: '15px', padding: '20px' }}>
        <DateTimeUnit value={days} label="Días" />
        <DateTimeUnit value={hours} label="Horas" />
        <DateTimeUnit value={minutes} label="Minutos" />
        <DateTimeUnit value={seconds} label="Segundos" />
      </div>
    );
  }
};

export default function MyCountdown() {
  // Fecha: 4 de Junio de 2026
  const target = new Date('2026-06-04T00:00:00');

  return (
    <div style={{ margin: '20px 0' }}>
      <Countdown date={target} renderer={Renderer} />
    </div>
  );
}