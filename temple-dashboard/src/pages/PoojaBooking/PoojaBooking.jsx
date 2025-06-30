import React, { useState } from 'react';
import './PoojaBooking.css'; // optional styling file

const PoojaBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    temple: '',
    poojaType: '',
    date: '',
  });

  const temples = [
    "Tirupati Balaji",
    "Kashi Vishwanath",
    "Golden Temple",
    "Meenakshi Temple",
    "Jagannath Temple"
  ];

  const poojaTypes = [
    "Abhishekam",
    "Archana",
    "Homa",
    "Special Darshan",
    "Annadanam"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Pooja booking submitted successfully!");
    setFormData({
      name: '',
      email: '',
      temple: '',
      poojaType: '',
      date: '',
    });
  };

  return (
    <div className="pooja-booking-page">
      <h1>Book a Pooja</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
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

        <select name="temple" value={formData.temple} onChange={handleChange} required>
          <option value="">Select Temple</option>
          {temples.map((temple, idx) => (
            <option key={idx} value={temple}>{temple}</option>
          ))}
        </select>

        <select name="poojaType" value={formData.poojaType} onChange={handleChange} required>
          <option value="">Select Pooja Type</option>
          {poojaTypes.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Pooja</button>
      </form>
    </div>
  );
};

export default PoojaBooking;
