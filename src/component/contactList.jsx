import React from "react";
import ContactItem from "./contactItem";
import "./css/contactList.css";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      <h2>Contact List</h2>

      {(
        contacts.map((contact, index) => (
          <ContactItem 
            key={index} 
            contact={contact} 
            index={index}   
          />
        ))
      )}
    </div>
  );
}

export default ContactList;