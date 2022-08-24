import React, { useContext } from "react";
import FlagContext from "../context/FlagContext";
import ThemeContext from "../context/ThemeContext";
import ClearFilterButton from "./ClearFilterButton";
import { FlagCard } from "./FlagCard";
import { Loader } from "./Loader";
import { NavSearch } from "./NavSearch";

export const Flags = () => {
  const { db, continent, searchFlag, emptyFilter, Loading } =
    useContext(FlagContext);

  const { DarkTheme } = useContext(ThemeContext);

  const getDataFiltered = ({ region, name }) => {
    if (continent === null && searchFlag === "") return true;

    if (searchFlag !== "" && continent !== null) {
      return name.common.includes(searchFlag) && region.includes(continent);
    }
    if (continent !== null) {
      return region.includes(continent);
    }

    if (searchFlag !== "") {
      return name.common.includes(searchFlag);
    }
  };

  const filterData = db.filter(getDataFiltered);
  return (
    <>
      <div className="containerFilters">
        <NavSearch />
      </div>
      <ClearFilterButton />
      {searchFlag && emptyFilter && (
        <h2 className={DarkTheme ? "errorSearch darkMode" : "errorSearch"}>
          "{searchFlag}" Not Found 😪
        </h2>
      )}
      {Loading && <Loader />}
      <div id="containerFlags">
        {db.length > 0 ? (
          filterData.map((el) => (
            <FlagCard
              key={el.name.common}
              name={el.name}
              flags={el.flags}
              population={el.population}
              region={el.region}
              capital={el.capital}
              cca2={el.cca2}
            />
          ))
        ) : (
          <h3 className={DarkTheme ? "fetchingData darkMode" : "fetchingData"}>
            Fetching Data...
          </h3>
        )}
      </div>
    </>
  );
};
