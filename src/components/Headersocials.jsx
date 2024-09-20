import React from 'react'
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faPhone,faHeart,faUser } from "@fortawesome/free-solid-svg-icons";


const Headersocials = () => {
  return (
    <div>
      <div className="home_socials">
        <a href="" className="home__socials-link" target='_blank'>
        <FontAwesomeIcon icon={faDownload} />
        </a>
        <a href="" className="home__socials-link" target='_blank'>
        <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="" className="home__socials-link" target='_blank'>
        <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="" className="home__socials-link" target='_blank'>
        <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </div>
  )
}

export default Headersocials;
