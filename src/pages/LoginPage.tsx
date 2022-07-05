import React from "react";
import { FooterComponent } from "../components/FooterComponent";
import { LoginFormComponent } from "../components/LoginFormComponent";
import IgniteLabLogoComponent from "../components/logos/IgniteLabLogoComponent";

// CSS
import "./styles/loginPage.scss";

export function LoginPage() {
  return (
    <main
      style={{
        backgroundColor: "black",
        backgroundImage: "url(../../assets/images/blur-bg.png)",
      }}
    >
      <section>
        <div className="content">
          <div className="content__textArea_login">
            <IgniteLabLogoComponent />
            <h1>
              Construa uma <strong>aplicação completa</strong>, do zero, com{" "}
              <strong>React JS</strong>
            </h1>
            <span>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </span>
          </div>
          <LoginFormComponent />
        </div>
        <div
          className="computerImage"
          style={{
            backgroundImage: "url(../../assets/images/codemockup.png)",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        ></div>
      </section>
      <FooterComponent />
    </main>
  );
}
