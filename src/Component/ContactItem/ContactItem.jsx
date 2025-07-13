import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";
import { MessageStatus } from '../Message/Message';

export default function ContactItem({
  id,
  name,
  img,
  last_message,
  last_time_connected,
  /* status */
}) {
  return (
    <Link to={`/contact/${id}`} className="contact-item">
      <div className="contact-left">
        <img src={img} alt={name} className="contact-avatar" />
        <div className="contact-info">
          <h3 className="contact-name">{name}</h3>
          <p className="contact-message">
            {last_message?.text || ''} {last_message && <MessageStatus status={last_message.status} />}
          </p>
        </div>
      </div>
      <div className="contact-time">
        <span>{last_time_connected}</span>
      </div>
    </Link>
  );
}



