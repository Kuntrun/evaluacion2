import React from 'react';
import Hero from '../components/Hero/Hero';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <div className="background-blur"></div> 
      <Hero 
        title="Bienvenidos a Cholchol"
        subtitle="Municipalidad de Cholchol - Comprometidos con nuestra comunidad"
        backgroundImage="/assets/hero-bg.jpg" 
      />
      
      <section className="highlights container">
        <div className="highlight-card">
          <h3>Noticias Recientes</h3>
          <p>Mantente informado sobre lo que ocurre en nuestra comuna.</p>
        </div>
        <div className="highlight-card">
          <h3>Servicios Municipales</h3>
          <p>Accede a todos los servicios que ofrece el municipio.</p>
        </div>
        <div className="highlight-card">
          <h3>Eventos</h3>
          <p>Participa en las actividades de nuestra comunidad.</p>
        </div>
      </section>

      <section className="gallery container">
        <h2>Galería de Imágenes</h2>
        <div className="gallery-grid">
          <img src="/assets/bus-estudiantes.jpg" alt="Imagen 1" />
          <img src="/assets/permisodecirculacion.jpeg" alt="Imagen 2" />
          <img src="/assets/publicacionentretanmiento.jpg" alt="Imagen 3" />
          <img src="/assets/publicaciontaller.jpg" alt="Imagen 4" />
        </div>
      </section>

      <section className="surveys container">
        <h2>Participa en nuestras encuestas</h2>
        <div className="survey-buttons">
          <button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform', '_blank')} 
            className="btn">
            Encuesta de gustos y actividades deportivas
          </button>
          <button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform', '_blank')} 
            className="btn">
            Encuesta cambio climático, sus impactos y medidas
          </button>
        </div>
      </section>

      <section className="youtube-preview container">
        <h2>Canal de la Municipalidad</h2>
        <div className="youtube-embed">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed?listType=user_uploads&list=MunicipalidaddeCholcholOficial" 
            title="Canal de la Municipalidad de Cholchol" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;