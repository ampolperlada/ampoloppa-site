import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState(null); // Holds the notification text
  const [showPopup, setShowPopup] = useState(false); // Controls visibility of the popup

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '15e3e590-9f9e-4dbf-88d1-53e9b6e92433');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setStatus('Success! Your message has been sent.');
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }

    // Show the popup and automatically hide it after 2 seconds
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={onSubmit}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" required />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          required
        ></textarea>

        <button className="button-49" type="submit">
          Send
        </button>
      </form>

      {/* Middle Pop-Up */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
