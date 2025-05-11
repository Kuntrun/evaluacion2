import React, { useState } from 'react';
import './Header.css';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom'; 
import logo from '/assets/logo-cholchol.png'; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar container">
        <div className="logo">
          <img src={logo} alt="Municipalidad de Cholchol" width="180" height="auto" />
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menú">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/municipio" className="nav-link">Municipio</Link>
          <Link to="/unidades" className="nav-link">Unidades Municipales</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <a href="https://municholchol.cl:2096/webmaillogout.cgi" 
             className="nav-link external" 
             target="_blank" 
             rel="noopener noreferrer">
            Webmail
          </a>
        </nav>
      </div>
      
      <div className="transparency-bar">
        <div className="container">
          <div className="transparency-links">
            <a href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498" 
               target="_blank" 
               rel="noopener noreferrer">
              Solicitar Información
            </a>
            <a href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045" 
               target="_blank" 
               rel="noopener noreferrer">
              Transparencia Activa
            </a>
            <a href="https://www.leylobby.gob.cl/instituciones/MU045" 
               target="_blank" 
               rel="noopener noreferrer">
              Plataforma Ley Lobby
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;