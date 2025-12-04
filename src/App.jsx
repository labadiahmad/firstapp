import React, { useState } from "react";
import ContactForm from "./component/contactForm";
import ContactList from "./component/contactList";

function App() {
  const [contacts, setContacts] = useState([]);

  // Add contact to the list
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Manager</h1>

      <ContactForm addContact={addContact} />

      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;