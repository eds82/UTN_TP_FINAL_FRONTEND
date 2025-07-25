import { createContext, useState } from "react";

//Contexto general para manejar la lista de contactos en toda la aplicacion
export const ContactContext = createContext({
  contacts: [],
  setContacts: () => {}
});

const ContactContextProvider = ({ children }) => {
  // Estado global de los contactos
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Carlos Ruiz',
      last_time_connected: '09:10',
      img: 'https://randomuser.me/api/portraits/men/90.jpg',
      last_message: {
        id: 3,
        text: 'Bien, terminando un trabajo para la facu',
        status: 'visto'
      }
    },
    {
      id: 2,
      name: 'Alan Young',
      last_time_connected: '10:15',
      img: 'https://randomuser.me/api/portraits/men/88.jpg',
      last_message: {
        id: 4,
        text: 'Ok exitos',
        status: 'visto'
      }
    },
    {
      id: 3,
      name: 'Veronique Lark',
      last_time_connected: '15:07',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      last_message: {
        id: 5,
        text: 'Hola, bien Vero y vos?',
        status: 'no-visto'
      }
    },
    {
      id: 4,
      name: 'Pablo Gutierrez',
      last_time_connected: '12:15',
      img: 'https://randomuser.me/api/portraits/lego/3.jpg',
      last_message: {
        id: 6,
        text: 'Hola Pablito bien viewjo y vos',
        status: 'enviado'
      }
    },
    {
      id: 5,
      name: 'Sara Lan',
      last_time_connected: '13:15',
      img: 'https://randomuser.me/api/portraits/women/60.jpg',
      last_message: {
        id: 7,
        text: 'Como estas Sara?',
        status: 'visto'
      }
    },
    {
      id: 6,
      name: 'Yesica stewart',
      last_time_connected: '14:15',
      img: 'https://randomuser.me/api/portraits/women/32.jpg',
      last_message: {
        id: 8,
        text: 'Como estas Yesica?',
        status: 'visto'
      }
    }
    
  ]);

  return (
    <ContactContext.Provider 
        value={
          { contacts, setContacts }
        }
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
