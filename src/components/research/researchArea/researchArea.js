import React from 'react';
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';
import './researchArea.css';

const ResearchArea = () => {
  return (
    <div>
      <Navbar />
      <div className="pageMain01">
      <div>
      <Sidebar />
      </div>
        <div className="rap">
          <h1>Our Research Areas</h1>
          <p>
            At SRKR Engineering College, we are committed to advancing knowledge and innovation in various fields. Our dedicated teams focus on the following research areas:
          </p>
          <ul>
            <li>Development of green methods to synthesize nanomaterials</li>
            <li>Development of polymer nanocomposites for energy and biomedical applications</li>
            <li>Organic-Inorganic hybrids for the stabilization of metal and metal oxide nanoparticles</li>
            <li>Development of metal chalcogenide quantum dots for energy applications</li>
            <li>Design and development of ceramics for high-temperature applications</li>
            <li>Drug analysis using various analytical techniques</li>
            <li>Water analysis and development of sensors for toxic metal contaminations in potable water</li>
            <li>Designing of biosensors</li>
            <li>Graphene and graphene oxide nanocomposites</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchArea;
