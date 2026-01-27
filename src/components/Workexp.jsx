import React from 'react';
import './Workexp.css';
import { WORK_EXPERIENCE } from '../utils/data';
import Expcard from './Expcard';

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
          {WORK_EXPERIENCE.map((item) => (
            <Expcard key={item.title} details={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workexp;