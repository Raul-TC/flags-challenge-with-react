import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export const Error404 = () => {
  const { DarkTheme } = useContext(ThemeContext);
  return (
    <div className="error">
      <span className={DarkTheme ? "error404 darkMode" : "error404"}></span>
      <Link className={DarkTheme ? "darkMode" : ""} to="../flags/">
        Go to Home
      </Link>
    </div>
  );
};
