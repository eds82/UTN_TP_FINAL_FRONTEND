import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactScreen from "./Screens/ContactScreen";
import ContactDetailScreen from "./Screens/ContactDetailScreen";
import ContactSettingsScreen from "./Screens/ContactSettingsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactScreen />} />
      <Route path="/contact/:id" element={<ContactDetailScreen />} />
      <Route path="/contact/:id/settings" element={<ContactSettingsScreen />} />
      <Route path="/settings/:id" element={<ContactSettingsScreen />} />
    </Routes>
  );
}

export default App;






