import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import styles from './Contact.styles';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/contact', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch (error) {
      if (error.response) {
        setFormErrors(error.response.data);
      }
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <TextInput
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          error={formErrors.name}
          required
        />
        <TextInput
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={formErrors.email}
          required
        />
        <TextArea
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleInputChange}
          error={formErrors.message}
          required
        />
        <Button type="submit" label="Submit" style={styles.button} />
      </form>
    </section>
  );
}

Contact.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default Contact;
