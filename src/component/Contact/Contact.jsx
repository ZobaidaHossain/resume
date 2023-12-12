import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ab9wxbv', 'template_t9cgyfu', form.current, 'auYyPIQxCWNRGHwaz')
        .then((result) => {
            console.log(result.text);
            alert('message send');
        }, (error) => {
            console.log(error.text);
        });}
    return (
        <div className="contact-form bg-black" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
          
            <h2 className="text-6xl font-bold text-white mb-4 ml-11 text-center">Get in Touch</h2>
            <h2 className="text-6xl font-bold text-white mb-4 ml-11 text-center">Contact Me</h2>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
          
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="btn"/>
            <h2 className="text-6xl font-bold text-white mb-4 ml-11 text-center">Thank You </h2>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    );
};

export default Contact;