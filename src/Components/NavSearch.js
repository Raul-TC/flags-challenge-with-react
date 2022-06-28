import React, { useState } from "react";
import iconSearch from "../assets/search.svg";
import { Select } from "./Select";

export const NavSearch = () => {
  const [searchFlag, setSearchFlag] = useState("");

  const handleFlagSearch = (e) => {
    setSearchFlag(e);
  };

  return (
    <>
      <div className="searchCountry">
        <img src={iconSearch} alt="icon-search" />
        <input
          onChange={(e) => handleFlagSearch(e.target.value)}
          type="search"
          name="searchCountry"
          placeholder="Search for a country..."
          autoComplete="off"
        />
      </div>
      <Select />
    </>
  );
};
