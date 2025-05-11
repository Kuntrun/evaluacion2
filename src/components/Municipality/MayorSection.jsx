import React from 'react';
import './MayorSection.css';

const MayorSection = () => {
  return (
    <section className="mayor-section">
      <h2 className="section-title">Alcalde</h2>
      
      <div className="mayor-content">
        <div className="mayor-image-container">
          <img 
            src="/assets/alcalde.jpg" 
            alt="Alcalde de Cholchol" 
            className="mayor-image"
            loading="lazy"
          />
        </div>
        
        <div className="mayor-info">
          <h3>ÁLVARO LABRAÑA OPAZO</h3>
          <p className="mayor-position">Alcalde de Cholchol</p>
          
          <div className="mayor-details">
            <div className="detail-item">
              <span className="detail-label">Período:</span>
              <span className="detail-value">2024-2028</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Contacto:</span>
              <a href="mailto:secretaria-alcaldia@municholchol.cl" className="detail-value">
                secretaria-alcaldia@municholchol.cl
              </a>
            </div>
          </div>
          
          <div className="mayor-bio">
            <h4>Biografía</h4>
            <p>
              Álvaro Labraña Opazo es el actual alcalde de la comuna de Cholchol, 
              comprometido con el desarrollo sostenible de la comunidad y la 
              preservación de la cultura local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MayorSection;