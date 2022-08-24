import React from "react";
import { useContext } from "react";
import FlagContext from "../context/FlagContext";
import ThemeContext from "../context/ThemeContext";

const ClearFilterButton = () => {
  const {
    continent,
    setContinent,
    searchFlag,
    setSearchFlag,
    setDisabledOptions,
  } = useContext(FlagContext);

  const { DarkTheme } = useContext(ThemeContext);
  return (
    <>
      {continent !== null || searchFlag !== "" ? (
        <p
          className={DarkTheme ? "clearText darkMode" : "clearText"}
          onClick={() => {
            setContinent(null);
            setSearchFlag("");
            setDisabledOptions(false);
          }}
        >
          <span className="clearButton">X</span> Clear filter
        </p>
      ) : null}
    </>
  );
};

export default ClearFilterButton;
