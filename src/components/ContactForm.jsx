import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "15e3e590-9f9e-4dbf-88d1-53e9b6e92433");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };

    <div className='contact-form-content'>
      <form>
        <div className='name-container'>
          <input type='text' name="firstname" placeholder='First Name'></input>
          <input type='text' name="lastname" placeholder='Last Name'></input>
        </div>
        <input type='text' name='email' placeholder='Email'></input>
        <textarea type="text"   name="message" placeholder='Message' rows={3}></textarea>

        <button className='button-49'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm