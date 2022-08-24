import React, { useContext } from "react";
import FlagContext from "../context/FlagContext";
import ThemeContext from "../context/ThemeContext";
export const Select = () => {
  const {
    continent,
    handleShowOptions,
    disabledOptions,
    handleChooseContinent,
  } = useContext(FlagContext);
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="select-flag" onClick={handleShowOptions}>
        <div className={DarkTheme ? "mainFilter darkMode" : "mainFilter"}>
          <p>{continent === null ? "Filter by Region" : continent}</p>
          <span
            className={`${
              DarkTheme ? "filterRegionArrow darkMode" : "filterRegionArrow"
            } ${disabledOptions ? "arrowDown" : ""}`}
          ></span>
        </div>
        {disabledOptions && (
          <>
            <div
              className={` ${DarkTheme ? "options darkMode" : "options"} ${
                disabledOptions && "visible"
              }`}
            >
              <p onClick={() => handleChooseContinent("Africa")}>Africa</p>
              <p onClick={() => handleChooseContinent("Americas")}>Americas</p>
              <p onClick={() => handleChooseContinent("Asia")}>Asia</p>
              <p onClick={() => handleChooseContinent("Europe")}>Europe</p>
              <p onClick={() => handleChooseContinent("Oceania")}>Oceania</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
