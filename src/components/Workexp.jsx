import React from 'react';
import './Workexp.css';
import { CERTIFICATIONS } from '../utils/data';

const Workexp = () => {
  return (
    <section className='experience-container'>
      <h5 className='certifications-heading'>
        <span className='heading-bracket'>&lt;</span>
        Certifications
        <span className='heading-bracket'>/&gt;</span>
      </h5>

      <div className='experience-content'>
        <div className='certifications-grid'>
          {CERTIFICATIONS.map((cert, index) => (
            <div key={cert.title} className='certification-card' style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className='cert-title'>{cert.title}</h3>
              <div className='cert-meta'>
                <span className='cert-issuer'>{cert.issuer}</span>
                <span className='cert-date'>{cert.date}</span>
              </div>
              <ul className='cert-description'>
                {cert.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workexp;