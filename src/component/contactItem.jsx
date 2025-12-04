import React from "react";
import "./css/contactItem.css";

function ContactItem({ contact, index }) {
  return (
    <div className="contact-item">
      <h3>
        {index + 1}. {contact.name} {contact.email}
      </h3>
      
    </div>
  );
}

export default ContactItem;