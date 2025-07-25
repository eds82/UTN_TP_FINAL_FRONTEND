import React, { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";
import { FaSquarePlus } from "react-icons/fa6";

const ContactList = ({searchTerm} ) => {
  const { contacts } = useContext(ContactContext);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div  className="contact-list">
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
      <div className="whatsapp-icon-container">
          <FaSquarePlus className="plus-icon"/>
      </div>
    </div>
  );
};

export default ContactList;

