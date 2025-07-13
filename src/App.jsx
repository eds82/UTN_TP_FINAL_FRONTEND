import { Routes, Route } from "react-router-dom";
import ContactScreen from "./Screens/ContactScreen";
import ContactDetailScreen from "./Screens/ContactDetailScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactScreen />} />
      <Route path="/contact/:id" element={<ContactDetailScreen />} />
    </Routes>
  );
}

export default App;






