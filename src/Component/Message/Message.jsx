import React, { useContext } from 'react';
import './Message.css';
import { MessagesContext } from '../../Context/MessagesContext';
import { BsTrash } from "react-icons/bs";

export function MessageStatus({ status }) {
  if (status === 'visto') return <span>✅</span>;
  if (status === 'no-visto') return <span>✔️</span>;
  if (status === 'enviado') return <span>⏳</span>;
  return null;
}

export default function Message({ emisor, hora, texto, status, id }) {
  const { handleEliminarMensaje } = useContext(MessagesContext);

  return (
    <div className={`message ${emisor === 'YO' ? 'my-message' : 'their-message'}`}>
      <p>{texto}</p>

      <div className='message-footer'>
        <div className='message-meta'>
          <span className='message-time'>{hora}</span>

          <span className='message-status'>
            <MessageStatus status={status} />
          </span>

          <BsTrash
            className='delete-icon'
            onClick={() => handleEliminarMensaje(id)}
          />
        </div>
      </div>
    </div>
  );
}
