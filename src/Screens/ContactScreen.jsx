import React, { useState } from "react";
import ContactList from "../Component/ContactList/ContactList";
import { FaEllipsisV } from "react-icons/fa";
import "./ContactScreen.css";
import Footer from '../Component/Footer';
import { FiCamera } from "react-icons/fi";
import DropdownMenu from "../Component/DropdownMenu/DropdownMenu";

export default function ContactScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="contact-screen">
      <div className="contact-header">
        <h2>WhatsApp</h2>
        <div className="menu-container">
          <FiCamera className="menu-icon-camera"/>
     
          <DropdownMenu className="menu-contact-screen" 
            menuItems={[
              { link: `/contact/:id/settings`, label: 'Nuevo grupo' },
              { label: 'Nueva comunidad' },
              { label: 'Dispositivos vinculados' },
              { label: 'Destacado' },
              { label: 'Ajustes' },
            ]}
          />
        </div>
      </div>
      <div className="contact-search">
        <input name="search"
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


