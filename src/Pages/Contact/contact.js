import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example of how you can handle the form data.
    console.log('Form Data Submitted:', formData);

    // You can implement your own logic here for sending the email via your backend or other service.
    // For example, make an API request to your server to handle the email sending process.

    alert('Message Sent!');
    setFormData({ name: '', surname: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Your Surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
