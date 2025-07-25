/* Componente para mostrar la lista de mensajes de un contacto */
import React, { useContext, useEffect, useRef } from 'react';
import { MessagesContext } from '../../Context/MessagesContext';
import Message from '../Message/Message';
import './ChatMessages.css';

const ChatMessages = ({ contactId }) => {
  const { messages } = useContext(MessagesContext);
  
  
  const contactMessages = messages.filter(m => m.contactId === contactId);

  // Ref al final de los mensajes
  const endOfMessagesRef = useRef(null);

  // Efecto para hacer scroll cuando cambien los mensajes
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [contactMessages]);
  
  return (
    <div className="chat-messages-container">
      <div className="chat-messages">
        {contactMessages.length > 0 ? (
          <>
            {contactMessages.map(msg => <Message key={msg.id} {...msg} />)}
            <div ref={endOfMessagesRef} />
          </>
        ) : (
          <div className="no-messages">No hay mensajes aún. ¡Comienza una una conversacion</div>
        )}
      </div>
    </div>
  );
};

export default ChatMessages;
       