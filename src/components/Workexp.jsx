import React from 'react'
import './Workexp.css'
import { WORK_EXPERIENCE } from '../utils/data'
import Expcard from './Expcard';

const Workexp = () => {
  return (
    <section className='experience-container'>
      <h5> Certifications </h5> 

      <div className='experience-content'> 
      {WORK_EXPERIENCE.map((item)=> (
        <Expcard key={item.title} details={item} />
      ))}
  
      </div>
    </section>
  );
};

export default Workexp