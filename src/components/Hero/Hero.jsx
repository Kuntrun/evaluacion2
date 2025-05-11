import React from 'react';
import './Hero.css'; 

const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="hero" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}
    >
      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;