/* Menu desplegable con opciones para el chat */
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

export default function DropdownMenu({ contactId = "", className = "", menuItems }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className= {`dropdown-container ${className}`}>
      <FaEllipsisV
        className="menu-icon"
        onClick={toggleMenu}
      />
      {showMenu && (
        
        <div className="dropdown-menu">
          {/* Este ul al aceptar una nueva prop(menuItems) va a recorrer la lista, si hay un link lo mostrara como <Link> y si hay una clase la aplicara al li correspondiente */}
          <ul>    
            {menuItems.map((item, index) => (
              <li key={index} className={item.className || ''}>
                {item.link ? (
                  <Link to={item.link.replace(':id', contactId)}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
