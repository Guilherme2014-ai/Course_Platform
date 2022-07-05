import React from "react";

// Components
import IgniteLabLogoComponent from "./logos/IgniteLabLogoComponent";

// CSS
import "./styles/HeaderComponent.scss";

export function HeaderComponent() {
  return (
    <nav className="header">
      <div className="header__logo">
        <IgniteLabLogoComponent />
      </div>
    </nav>
  );
}
