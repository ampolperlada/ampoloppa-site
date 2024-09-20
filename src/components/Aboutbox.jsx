import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";


const aboutbox = () => {
  return (
      <div className='about__boxes grid'>
        <div className='about__box'>
          <i className='about__icon'> <FaCheck /></i>

          <div>
            <h3 className='about__title'>259</h3>
            <span className='about__subtitle'> Project Completed </span>
          </div>
        </div>

        <div className='about__box'>
          <i className='about__icon '> <FiCoffee /> </i>

          <div>
            <h3 className='about__title'>5460</h3>
            <span className='about__subtitle'>Cup of Coffee</span>
          </div>
        </div>

        <div className='about__box'>
          <i className='about__icon'> <IoIosPeople/> </i>

          <div>
            <h3 className='about__title'>134</h3>
            <span className='about__subtitle'>Satisfied Clients</span>
          </div>
        </div>


        <div className='about__box'>
          <i className='about__icon'> <PiCertificateFill /></i>

          <div>
            <h3 className='about__title'>40</h3>
            <span className='about__subtitle'>Certifications</span>
          </div>
        </div>


      </div>
  )
}

export default aboutbox;
