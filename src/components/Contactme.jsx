import React from 'react'
import './Contactme.css'
import ContactInfoCardd from './ContactInfoCard'
import ContactForm from './ContactForm'
import emailIcon from '../image/email.png';
import githubIcon from '../image/github.png';
import linkedInicon from '../image/linkedin.png'
import twitterIcon from '../image/twitter.png'

const Contactme = () => {
  return (
    <section className='contact-container'  id="contact-link">
      <h5>.contact</h5>

      <div className='contact-container'>
        <div style={{flex: 1}}>
        <ContactInfoCardd
        iconUrl={emailIcon}
        text="christianp.perlada@gmail.com"
        link="mailto:christianp.perlada@gmail.com"
          />
        <ContactInfoCardd
        iconUrl={githubIcon}
        text="https://github.com/ampolperlada"
        link="https://github.com/ampolperlada"
          />
           <ContactInfoCardd
        iconUrl={twitterIcon}
        text="https://x.com/ampolopppa"
        link="https://x.com/ampolopppa"
          />
           <ContactInfoCardd
        iconUrl={linkedInicon}
        text="Christian Paul Perlada"
        link="https://linkedin.com/in/christian-paul-perlada"
          />
        </div>
        <div style={{flex: 1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contactme