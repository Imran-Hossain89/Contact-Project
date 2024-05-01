import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div>
      <form className="elements">
        <div className="heading-buttons">
          <button>VIA SUPPORT CHAT</button>
          <button>VIA CALL</button>
        </div>
        <div>
          <level>VIA EMAIL FORM</level>
          <level>Name</level>
          <input />
          <level>Email</level>
          <input />
          <level>Text</level>
          <input />
          <button>Submit</button>
        </div>
      </form>
      <div>
        <img src="/image/contact-logo.jpeg" />
      </div>
    </div>
  );
}

export default ContactForm;
