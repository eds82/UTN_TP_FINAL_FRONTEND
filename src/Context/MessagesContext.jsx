import { createContext, useState } from "react";

//Creando el contexto para mensajes
//Definimos funciones vacias para el valor inicial
export const MessagesContext = createContext({
  messages: [],
  addNewMessage: (text, contactId) => { },
  handleEliminarMensaje: (id_mensaje) => { }
});

const MessagesContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      contactId: 1,
      emisor: 'Carlos Ruiz',
      hora: '09:04',
      id: 0,
      texto: 'Hola',
      status: 'visto'
    },
    {
      contactId: 1,
      emisor: 'YO',
      hora: '09:05',
      id: 1,
      texto: 'Hola Carlos como estas?',
      status: 'visto'
    },
    {
      contactId: 1,
      emisor: 'Carlos Ruiz',
      hora: '09:06',
      id: 2,
      texto: 'Bien Edu, trabajando en un proyecto y vos como estas?',
      status: 'visto'
    },
    {
      contactId: 1,
      emisor: 'YO',
      hora: '09:10',
      id: 3,
      texto: 'Bien, terminando un trabajo para la facu',
      status: 'visto'
    },
    {
      contactId: 2,
      emisor: 'YO',
      hora: '10:15',
      id: 4,
      texto: 'Hola Alan, entregaste el tp?',
      status: 'no-visto'
    },
    {
      contactId: 2,
      emisor: 'Alan',
      hora: '10:15',
      id: 5,
      texto: 'Como estas Edu, todavia estoy ultimando lo ultimos detalles',
      status: 'no-visto'
    },
    {
      contactId: 2,
      emisor: 'YO',
      hora: '10:15',
      id: 6,
      texto: 'Ok exitos',
      status: 'no-visto'
    },
    {
      contactId: 3,
      emisor: 'Veronique',
      hora: '15:00',
      id: 7,
      texto: 'Hola Edu, como estas?',
      status: 'visto'
    },
    {
      contactId: 3,
      emisor: 'YO',
      hora: '15:02',
      id: 8,
      texto: 'Hola, bien Vero y vos?',
      status: 'no-visto'
    },
    {
      contactId: 4,
      emisor: 'Pablo',
      hora: '11:04',
      id: 9,
      texto: 'Hola crack, como va?',
      status: 'visto'
    },
    {
      contactId: 4,
      emisor: 'YO',
      hora: '11:04',
      id: 10,
      texto: 'Hola Pablito bien viewjo y vos',
      status: 'no-visto'
    },
    {
      contactId: 5,
      emisor: 'Sara',
      hora: '13:00',
      id: 11,
      texto: 'Hola',
      status: 'visto'
    },
    {
      contactId: 5,
      emisor: 'YO',
      hora: '13:04',
      id: 12,
      texto: 'Como estas Sara?',
      status: 'visto'
    },

  ]);

  //Uso del handleEliminarMensaje para eliminar mensaje por ID

  const handleEliminarMensaje = (id_mensaje) => {
    setMessages(messages.filter(m => m.id !== id_mensaje));
  };

  //Agrega nuevo mensaje
  const addNewMessage = (text, contactId) => {
    const newMessage = {
      contactId,
      emisor: 'YO',
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      texto: text,
      status: 'no-recibido',
      id: Date.now(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        addNewMessage,
        handleEliminarMensaje
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;
