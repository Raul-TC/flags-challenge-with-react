import React from "react";
import { DarkMode } from "./DarkMode";

export const Header = () => {
  return (
    <header>
      <div className="containerheader">
        <h1 className="header_title">Where in the world?</h1>
        <DarkMode />
      </div>
    </header>
  );
};
