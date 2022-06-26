import React, { useRef } from "react";

export const DarkMode = () => {
  let dark = useRef();

  if (localStorage.getItem("theme") === "🌙 Dark Mode") {
    document.body.classList.remove("classDark");
  } else {
    document.body.classList.add("classDark");
  }
  const handleChangeTheme = () => {
    if (dark.current.textContent === "🌙 Dark Mode") {
      localStorage.setItem("theme", "🌞 Light Mode");
      dark.current.textContent = localStorage.getItem("theme");
      document.body.classList.add("classDark");
    } else {
      localStorage.setItem("theme", "🌙 Dark Mode");
      dark.current.textContent = localStorage.getItem("theme");
      document.body.classList.remove("classDark");
    }
  };
  return (
    <>
      <div ref={dark} className="container_button" onClick={handleChangeTheme}>
        <p>{localStorage.getItem("theme")}</p>
      </div>
    </>
  );
};
