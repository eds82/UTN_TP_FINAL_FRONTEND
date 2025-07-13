import React, { useState } from "react";
import ContactList from "../Component/ContactList/ContactList";
import { FaEllipsisV } from "react-icons/fa";
import "./ContactScreen.css";
import Footer from '../Component/Footer';

export default function ContactScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="contact-screen">
      <div className="contact-header">
        <h2>Chats</h2>
        <div className="menu-container">
          <FaEllipsisV className="menu-icon" onClick={toggleMenu} />
          {showMenu && (
            <div className="dropdown-menu">
              <ul>
                <li>Ver Contactos</li>
                <li>Buscar</li>
                <li>Nuevo grupo</li>
                <li>Configuracion</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="contact-search">
        <input
          type="text"
          placeholder="Buscar o empezar un chat nuevo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ContactList searchTerm={searchTerm}/>
      <Footer/>
    </div>
  );
}


