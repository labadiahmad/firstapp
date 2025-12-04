import React, { useState } from "react";
import "./css/contactForm.css";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;