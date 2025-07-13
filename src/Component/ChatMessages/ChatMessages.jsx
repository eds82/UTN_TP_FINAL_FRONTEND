import React, { useContext } from 'react';
import { MessagesContext } from '../../Context/MessagesContext';
import Message from '../Message/Message';
import './ChatMessages.css';

const ChatMessages = ({ contactId }) => {
  const { messages } = useContext(MessagesContext);
  
  
  const contactMessages = messages.filter(m => m.contactId === contactId);
  
  return (
    <div className="chat-messages-container">
      <div className="chat-messages">
        {contactMessages.length > 0 ? (
          contactMessages.map(msg => <Message key={msg.id} {...msg} />)
        ) : (
          <div className="no-messages">No hay mensajes aún. ¡Comienza una una conversacion</div>
        )}
      </div>

    </div>
  );
}

export default ChatMessages;
