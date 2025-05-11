import React from 'react';
import './Footer.css';
import { MapPin, Mail, Phone } from 'react-feather';
import logo from '../../assets/logo-cholchol-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Municipalidad de Cholchol" width="150" />
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-links">
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>José Joaquín Pérez 449, Cholchol</span>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <a href="mailto:secretaria-alcaldia@municholchol.cl">
                secretaria-alcaldia@municholchol.cl
              </a>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <a href="tel:+56452734200">45 2734200</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Horario de Atención</h3>
          <p>Lunes a Viernes</p>
          <p>08:30 - 14:00 hrs</p>
          <p>15:00 - 17:30 hrs</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;