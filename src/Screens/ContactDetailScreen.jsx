import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactContext } from "../Context/ContactContext";
import ChatMessages from "../Component/ChatMessages/ChatMessages";
import "../index.css"
import { MessagesContext } from "../Context/MessagesContext";
import { IoSend } from "react-icons/io5";
import { BsPaperclip } from "react-icons/bs";
import { FaRegSmile, FaEllipsisV } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import DropdownMenu from "../Component/DropdownMenu/DropdownMenu";

// Pantalla de detalle de contacto
// Muestra el encabezado del chat, los mensajes y un formulario para enviar mensajes

export default function ContactDetailScreen() {
  const { id } = useParams();
  const { contacts } = useContext(ContactContext);

  const { addNewMessage } = useContext(MessagesContext);

  const [newMessage, setNewMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};

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
        <div className="h-left" >
          <Link to="/" className="back-arrow">⬅</Link>
          
          <Link to={`/settings/${contact.id}`}>
            <img src={contact.img} alt={`${contact.name} profile`} className="chat-profile" />
          </Link>
          
          <div className="chat-header-info">
            <h2>{contact.name}</h2>
            <p>Última conexión: a las {contact.last_time_connected}</p>
          </div>
        </div>
        
        <div className="h-right" >
          <HiOutlinePhone className="h-right-phone"/>
          <DropdownMenu className="menu-detail-screen" contactId={contact.id}
            menuItems={[
              { link: `/contact/:id/settings`, label: 'Ver contacto', className: 'enlace-text'},
              { label: 'Buscar' },
              { label: 'Añadir a lista' },
              { label: 'Silenciar notificaciones' },
              { label: 'Temas del chat' },
            ]}
          />
        </div>
        
      </div>

    {/* los mensajes */}
      <div className="chat-body">
        <ChatMessages contactId={contact.id} />
      </div>

    {/* Formulario para enviar mensaje */}
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


