import React from 'react'
import './Contactme.css'
import ContactInfoCardd from './ContactInfoCard'
import emailIcon from '../image/email.png';
import githubIcon from '../image/github.png';


const Contactme = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-container'>
        <div style={{flex: 1}}>
        <ContactInfoCardd
        iconUrl={emailIcon}
        text="christianp.perlada@gmail.com"
          />
        <ContactInfoCardd
        iconUrl={githubIcon}
        text="https://github.com/ampolperlada"
          />
           <ContactInfoCardd
        iconUrl={githubIcon}
        text="https://github.com/ampolperlada"
          />
           <ContactInfoCardd
        iconUrl={githubIcon}
        text="https://github.com/ampolperlada"
          />
        </div>
        <div style={{flex: 1}}></div>
      </div>
    </section>
  )
}

export default Contactme