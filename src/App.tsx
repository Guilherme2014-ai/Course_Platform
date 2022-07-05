import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { EventPage } from "./pages/EventPage";
import { LoginPage } from "./pages/LoginPage";

// CSS
import "./styles/global.scss";

const RedirectPageHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  });

  return <div></div>;
};

function App() {
  // OBS: A informação sobre a Rota que deve ser utilizada esta um nivel acima, passada através de um Provider

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectPageHandler />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event/:lesson_slug" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
