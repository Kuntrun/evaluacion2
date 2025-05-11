import React, { useState } from 'react';
import MayorSection from '../components/Municipality/MayorSection';
import Ordinances from '../components/Municipality/Ordinances';
import AccordionSection from '../components/Municipality/AccordionSection';
import CouncilMembers from '../components/Municipality/CouncilMembers';
import HistorySection from '../components/Municipality/HistorySection';
import OrganigramSection from '../components/Municipality/OrganigramSection';
import Regulations from '../components/Municipality/Regulations';

const Municipio = () => {
  const [activeSection, setActiveSection] = useState('mayor');

  return (
    <div className="municipio-page container">
      <h1>Municipio</h1>
      <div className="section-buttons">
        <button onClick={() => setActiveSection('accordion')}>Direciones Municipales</button>
        <button onClick={() => setActiveSection('council')}>Consejo Municipal</button>
        <button onClick={() => setActiveSection('history')}>Historia</button>
        <button onClick={() => setActiveSection('mayor')}>Alcalde</button>
        <button onClick={() => setActiveSection('ordinances')}>Ordenanzas</button>
        <button onClick={() => setActiveSection('organigram')}>Organigrama</button>
        <button onClick={() => setActiveSection('regulations')}>Reglamentos</button>
      </div>
      <div className="section-content">
        {activeSection === 'accordion' && <AccordionSection />}
        {activeSection === 'council' && <CouncilMembers />}
        {activeSection === 'history' && <HistorySection />}
        {activeSection === 'mayor' && <MayorSection />}
        {activeSection === 'ordinances' && <Ordinances />}
        {activeSection === 'organigram' && <OrganigramSection />}
        {activeSection === 'regulations' && <Regulations />}
      </div>
    </div>
  );
};

export default Municipio;
