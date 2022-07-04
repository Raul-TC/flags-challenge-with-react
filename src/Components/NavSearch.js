import React from "react";
import iconSearch from "../assets/search.svg";
import { Select } from "./Select";

export const NavSearch = ({
  setSearchFlag,
  handleFlagSearch,
  handleShowOptions,
  handleChooseContinent,
  continent,
  setContinent,
  disabledOptions,
  setDisabledOptions,
}) => {
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
      <Select
        setSearchFlag={setSearchFlag}
        handleShowOptions={handleShowOptions}
        handleChooseContinent={handleChooseContinent}
        continent={continent}
        setContinent={setContinent}
        disabledOptions={disabledOptions}
        setDisabledOptions={setDisabledOptions}
      />
    </>
  );
};
