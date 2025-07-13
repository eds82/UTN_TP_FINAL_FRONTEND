import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ContactContextProvider from "./Context/ContactContext.jsx";
import MessagesContextProvider from "./Context/MessagesContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactContextProvider>
        <MessagesContextProvider>
           <App />
        </MessagesContextProvider>
       </ContactContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);




