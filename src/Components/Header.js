import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { DarkMode } from "./DarkMode";

export const Header = () => {
  const { DarkTheme } = useContext(ThemeContext);
  return (
    <header className={DarkTheme ? "darkMode" : ""}>
      <div className="containerheader">
        <h1 className={DarkTheme ? "header_title darkMode" : "header_title"}>
          Where in the world?
        </h1>
        <DarkMode />
      </div>
    </header>
  );
};
