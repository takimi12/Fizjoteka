

// pages/index.js
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    amount: 12345,
    currency: 'PLN',
    description: 'Test payment',
    email: 'test@example.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/payment', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
      </div>
      <div>
        <label>Currency</label>
        <input type="text" name="currency" value={formData.currency} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
}
