import React, { useContext } from 'react';
import { MessagesContext } from '../../Context/MessagesContext';
import './NewMessageForm.css';

export default function NewMessageForm({ contactId }) {
  const { addNewMessage } = useContext(MessagesContext);

  const handleSubmitNewMessage = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    addNewMessage(text, contactId);
    e.target.reset();
  };

  return (
    <form className="message-form" onSubmit={handleSubmitNewMessage}>
      <input
        type="text"
        name="text"
        placeholder="Escribe un mensaje..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
