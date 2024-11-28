import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-text"
        >
          {text}
        </a>
      ) : (
        <p className="contact-text">{text}</p>
      )}
    </div>
  );
};

export default ContactInfoCard;
