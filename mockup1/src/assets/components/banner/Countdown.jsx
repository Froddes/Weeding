import React from 'react';
import Countdown from 'react-countdown';
import '../../css/Countdown.css';

const DateTimeUnit = ({ value, label }) => (
  <div className="countdown-unit">
    <span className="unit-value">{value}</span>
    <span className="unit-label">{label}</span>
  </div>
);

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="countdown-completed">¡Llegó el día!</span>;
  } else {
    return (
      <div className="countdown-container">
        <DateTimeUnit value={days} label="Días" />
        <DateTimeUnit value={hours} label="Horas" />
        <DateTimeUnit value={minutes} label="Minutos" />
        <DateTimeUnit value={seconds} label="Segundos" />
      </div>
    );
  }
};

export default function MyCountdown() {
  const target = new Date('2026-03-14T00:00:00');

  return (
    <div className="countdown-wrapper">
      <Countdown date={target} renderer={Renderer} />
    </div>
  );
}