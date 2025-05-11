import React, { useState } from 'react';
import MayorSection from '../components/Municipality/MayorSection';
import CouncilMembers from '../components/Municipality/CouncilMembers';
import OrganigramSection from '../components/Municipality/OrganigramSection';
import Ordinances from '../components/Municipality/Ordinances';
import Regulations from '../components/Municipality/Regulations';
import HistorySection from '../components/Municipality/HistorySection';
import './Municipality.css';

const MunicipalityPage = () => {
  const [activeSection, setActiveSection] = useState('alcalde');

  const sections = [
    { id: 'alcalde', title: 'Alcalde', component: <MayorSection /> },
    { id: 'concejo', title: 'Concejo Municipal', component: <CouncilMembers /> },
    { id: 'organigrama', title: 'Organigrama', component: <OrganigramSection /> },
    { id: 'ordenanzas', title: 'Ordenanzas', component: <Ordinances /> },
    { id: 'reglamentos', title: 'Reglamentos', component: <Regulations /> },
    { id: 'historia', title: 'Historia', component: <HistorySection /> }
  ];

  return (
    <div className="municipality-page container">
      <h1>Municipalidad</h1>
      <MayorSection />
      <div className="municipality-container">
        <aside className="municipality-sidebar">
          <ul>
            {sections.map(section => (
              <li 
                key={section.id}
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>
        <main className="municipality-content styled-section">
          {sections.find(s => s.id === activeSection)?.component}
        </main>
      </div>
    </div>
  );
};

export default MunicipalityPage;