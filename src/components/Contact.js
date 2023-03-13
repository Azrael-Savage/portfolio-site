import React, { useState } from "react";
import { validateEmail } from "../utils/validations";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { name, email, message });
      // Send email or perform other action here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleInputChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" value={message} onChange={handleInputChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
