import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

/*
Aprendido:
GraphQL
Apollo
env
webpack
githubpages
*/

const answers = ["fogo", "não sei", "guilherme"];

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

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      const key = e.key;
      const binaryCode =
        "01000101 01110011 01110100 01100101 00100000 11000011 10101001 00100000 01110101 01101101 00100000 01100101 01101110 01101001 01100111 01101101 01100001 00100000 01110000 01100001 01110010 01100001 00100000 01101111 00100000 01100001 01101101 01101001 01100111 01110101 01101001 01101110 01101000 01101111 00100000 01100100 01101111 00100000 01100111 01110101 01101001 01101100 01101000 01100101 01110010 01101101 01100101 00101110 00101110 00101110 00001010 00001010 01010011 01100101 01101110 01101000 01100001 00111010 00100000 00100010 01010000 01110010 01100101 01100011 01101001 01110011 01100001 00100000 01110011 01100101 01110010 00100000 01100001 01101100 01101001 01101101 01100101 01101110 01110100 01100001 01100100 01101111 00100000 01110000 01100001 01110010 01100001 00100000 01110110 01101001 01110110 01100101 01110010 00101100 00100000 01101101 01100001 01110011 00100000 01101101 01101111 01110010 01110010 01100101 00100000 01110011 01100101 00100000 01110010 01100101 01100011 01100101 01100010 01100101 00100000 11000011 10100001 01100111 01110101 01100001 00100000 00111111 00100010";

      if (key == "e") {
        console.log(`
        ${binaryCode}

        -------------
        Coinsegue Resolver ?
        `);
        const answer =
          prompt(`
      ${binaryCode}

      Qual a Senha ?
      OBS: ctrl + i ---> para abrir o console e copiar o código acima.
      `) || "";

        if (answers.includes(answer))
          window.location.href =
            "https://api.whatsapp.com/send?phone=5515988315201&text=GuiGui%20%20Eu%20Fui%20Digno%20de%20Resolver%20o%20Enigma!!!,%20Qual%20será%20meu%20premio?";
      }
    });
  });

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
