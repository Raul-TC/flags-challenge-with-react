import React, { useContext } from "react";
import iconSearch from "../assets/search.svg";
import FlagContext from "../context/FlagContext";
import ThemeContext from "../context/ThemeContext";
import { Select } from "./Select";

export const NavSearch = () => {
  const { handleFlagSearch, searchFlag } = useContext(FlagContext);
  const { DarkTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={DarkTheme ? "searchCountry darkMode" : "searchCountry"}>
        <img src={iconSearch} alt="icon-search" />
        <input
          onChange={(e) => handleFlagSearch(e)}
          type="search"
          value={searchFlag}
          name="searchCountry"
          placeholder="Search for a country..."
          autoComplete="off"
        />
      </div>
      <Select />
    </>
  );
};
