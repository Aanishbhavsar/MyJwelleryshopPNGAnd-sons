import React, { useState } from 'react';
import './Enquiry.css';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    enquiry: ''
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submit Handler with Validations & Alerts
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, enquiry } = formData;

    // 1. Name Validation (Only Alphabets & Spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!nameRegex.test(name)) {
      alert('Invalid Name! Name should contain only alphabets and spaces.');
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Invalid Email! Please enter a valid email address (e.g., example@mail.com).');
      return;
    }

    // 3. Contact Number Validation (Only 10-digit Numbers)
    const phoneRegex = /^[0-9]{10}$/;
    if (!contact.trim()) {
      alert('Please enter your contact number.');
      return;
    }
    if (!phoneRegex.test(contact)) {
      alert('Invalid Contact Number! Please enter a valid 10-digit mobile number without letters or symbols.');
      return;
    }

    // 4. Enquiry Message Validation
    if (!enquiry.trim()) {
      alert('Please enter your enquiry message.');
      return;
    }

    // If all validations pass
    alert(`Thank you, ${name}! Your enquiry for P. N. Gadgil & Sons jewellery has been submitted successfully.`);
    
    // Reset Form
    setFormData({
      name: '',
      email: '',
      contact: '',
      enquiry: ''
    });
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-card">
        <div className="enquiry-header">
          <h2>Jewellery Enquiry</h2>
          <p>Get custom quotes & showroom appointment details</p>
        </div>

        <form onSubmit={handleSubmit} className="enquiry-form">
          {/* Name Field */}
          <div className="input-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Contact Field */}
          <div className="input-group">
            <label>Contact No *</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter 10-digit mobile number"
              value={formData.contact}
              maxLength="10"
              onChange={handleChange}
            />
          </div>

          {/* Enquiry Details Field */}
          <div className="input-group">
            <label>Enquiry Details *</label>
            <textarea
              name="enquiry"
              placeholder="Specify requirements (e.g., 22KT Gold Ring, Diamond Necklace, Weight, Budget)..."
              value={formData.enquiry}
              onChange={handleChange}
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="enquiry-btn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;