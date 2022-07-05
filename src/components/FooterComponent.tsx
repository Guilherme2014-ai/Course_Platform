import React from "react";
import RocketseatLogoComponent from "./RocketseatLogoComponent";

// CSS
import "./styles/FooterComponent.scss";

export function FooterComponent() {
  return (
    <footer>
      <div>
        <RocketseatLogoComponent />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
