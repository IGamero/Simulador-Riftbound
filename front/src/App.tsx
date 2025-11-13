import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Decks from "./pages/Decks";
import GameBoard from "./pages/GameBoard";

function App() {
  return (
    <GoogleOAuthProvider clientId="clave Google">
      <Router>
        <Routes>
          {/* Redirigir raíz directamente a /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/play" element={<GameBoard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
