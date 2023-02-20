import React, {useRef} from "react";

import emailjs from '@emailjs/browser';
// import "./styles/contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hqa04xd', 'template_qsjzc6y', form.current, '9bLaVTpIErf5wReCg');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jayeshpandav02@gmail.com</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:jayeshpandav02@gmail.com"
            >
              send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>jayesh Pandav</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://m.me/profile.php?id=100075522804942"
            >
              send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>jayesh Pandav</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send/?phone=%2B919309110595&text&type=phone_number"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="your message here"
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}; 

export default Contact;
