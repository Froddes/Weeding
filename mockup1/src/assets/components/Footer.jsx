import React from 'react';
import './../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-title">¡Nos vemos pronto!</h3>
        
        <div className="footer-names">
           <span>Laura & Fran</span>
        </div>

        <p className="footer-thanks">
          Gracias por ser parte de nuestra historia y acompañarnos en este día tan especial.
        </p>

        <div className="footer-bottom">
          <p>&copy; {currentYear} — Hecho con amor para nuestro gran día</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;