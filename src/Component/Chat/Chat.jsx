import ChatMessages from '../ChatMessages/ChatMessages';

export default function Chat({ contactId }) {
  return (
    <div className='chat-page'>
      <ChatMessages contactId={contactId} />
    </div>
  );
  
}
