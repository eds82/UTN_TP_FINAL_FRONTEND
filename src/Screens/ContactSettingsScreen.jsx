/*
 * Pantalla de configuración del contacto.
 * Muestra la foto, botones de llamada/video/buscar y opciones extra.
 * Incluye scroll vertical en las opciones.
 */
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactContext } from "../Context/ContactContext";
import "./ContactSettingsScreen.css";
import { FiPhone } from "react-icons/fi";
import { BiVideo, BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

export default function ContactSettingsScreen() {
  const { id } = useParams();
  const { contacts } = useContext(ContactContext);
  const contact = contacts.find(c => c.id === parseInt(id));

  const [localImg, setLocalImg] = useState("");

  useEffect(() => {
    if (contact) {
    setLocalImg(contact.img);
  }
}, [contact]);
  

  if (!contact) {
    return <p>Contacto no encontrado</p>;
  }

  const avatarSrc = localImg?.trim() ? localImg : "/images/avatar1.png";

  return (
    <div className="contact-settings-screen">

      <div className="settings-header">
        <Link to={`/contact/${id}`} className="back-arrow">←</Link>
        <BiDotsVerticalRounded className='s-contact-menu' />
        <div className="contact-info">
          <img src={avatarSrc} alt={contact.name} className="settings-avatar" />
          <h2>{contact.name}</h2>
          <p>Última conexión: {contact.last_time_connected}</p>

        </div>

        <div className="s-header-icons" >
          <div className="s-header-icons-phone-contenedor s-icon-button">
            <FiPhone className="s-header-i-phone" />
            <p className="text-phone">Llamar</p>
          </div>
          <div className="s-header-icons-video-contenedor s-icon-button" >
            <BiVideo className="s-header-video" />
            <p className="text-video">Video</p>
          </div>
          <div className="s-header-icons-search-contenedor s-icon-button" >
            <IoIosSearch className="s-header-search" />
            <p className="text-buscar">Buscar</p>
          </div>
      </div>
    </div>

      <div className="settings-options">
        <div className="option">🔔 Notificaciones</div>
        <div className="option">
          <p>🖼️ Visibilidad de archivos multimedia</p>
          <span>Descativado</span>
        </div>
        <div className="option">📝 Mensajes conservados</div>
        <div className="option">
          <p>🔒 Cifrado de extremo a extremo</p>
          <span>los mensajes y las llamadas están cifrados de extremo a extremo.</span>
        </div>
        <div className="option">
          <p>⏳ Mensajes temporales</p>
          <span>Desactivados</span>
        </div>
        <div className="option">
          <p>🚫 Restringir chat</p>
          <span>Restringe y oculta este chat en este dispositivo.</span>
        </div>
      </div>

    </div>
  );
}
