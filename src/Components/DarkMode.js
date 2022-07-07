import React, { useEffect, useRef, useState } from "react";

export const DarkMode = () => {
  let dark = useRef();

  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (localStorage.getItem("theme") === "🌙 Dark Mode") {
      document.body.classList.add("classDark");
      setTheme("🌞 Light Mode");
      dark.current.textContent = theme;
    } else {
      document.body.classList.remove("classDark");
      setTheme("🌙 Dark Mode");
      dark.current.textContent = theme;
    }
  }, [theme]);

  const handleChangeTheme = () => {
    if (dark.current.textContent === "🌙 Dark Mode") {
      localStorage.setItem("theme", "🌙 Dark Mode");
      dark.current.textContent = theme;
      document.body.classList.add("classDark");
      setTheme("🌞 Light Mode");
    } else {
      localStorage.setItem("theme", "🌞 Light Mode");
      dark.current.textContent = theme;
      setTheme("🌙 Dark Mode");
      document.body.classList.remove("classDark");
    }
  };
  return (
    <>
      <button
        ref={dark}
        className="container_button"
        onClick={handleChangeTheme}
      >
        <p>{theme}</p>
      </button>
    </>
  );
};
