import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactContext } from "../Context/ContactContext";
import ChatMessages from "../Component/ChatMessages/ChatMessages";
import "../index.css"
import { MessagesContext } from "../Context/MessagesContext";
import { IoSend } from "react-icons/io5";
import { BsPaperclip } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";

export default function ContactDetailScreen() {
  const { id } = useParams();
  const { contacts } = useContext(ContactContext);

  const { addNewMessage } = useContext(MessagesContext);

  const [newMessage, setNewMessage] = useState("");

  const contact = contacts.find(c => c.id === parseInt(id));

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    addNewMessage(newMessage, contact.id);
    setNewMessage('');
  };


  if (!contact) return <p>Contacto no encontrado</p>;

  return (
    <div className="chat-container">  {/* Este es header */}

      <div className="chat-header">
        <Link to="/" className="back-arrow">⬅</Link>
        <img src={contact.img} alt={`${contact.name} profile`} className="contact-profile" />
        <div className="chat-header-info">
          <h2>{contact.name}</h2>
          <p>Última conexión: a las {contact.last_time_connected}</p>
        </div>
      </div>

      <div className="chat-body">
        <ChatMessages contactId={contact.id} />
      </div>
      <div className="chat-input-container">

        <div className="emoji-container">
          <FaRegSmile className="emoji-icon" />
        </div>
        <textarea id='mensajeInput' name='mensaje' placeholder="Escriba un mensaje" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}>
        </textarea>
        <div className="icon-container" >
          <BsPaperclip className="attach-icon" />
        </div>
        <button onClick={handleSendMessage}>
          <IoSend />
        </button>

      </div>

    </div>
  );
}


