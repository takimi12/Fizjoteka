'use client';
import React, { useState } from 'react';
import { sendEmail } from '../../app/api/list/route'
const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({
        Source: 'tomek12olech@gmail.com', // Zmień na swój adres e-mail
        Destination: { ToAddresses: ['tomek12olech@gmail.com'] }, // Zmień na adres odbiorcy
        Message: {
          Subject: { Data: subject },
          Body: { Html: { Data: message } }
        }
      });
      alert('Email został wysłany!');
    } catch (error) {
      console.error('Błąd podczas wysyłania e-maila:', error);
      alert('Wystąpił błąd podczas wysyłania e-maila.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Twój adres e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Temat"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Wiadomość"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default EmailForm;
