import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Loader = () => {
  const { DarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        DarkTheme ? "lds-spinner center darkMode" : "lds-spinner center"
      }
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
