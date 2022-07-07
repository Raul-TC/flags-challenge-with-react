import React from "react";
export const Select = ({
  setSearchFlag,
  disabledOptions,
  setDisabledOptions,
  continent,
  setContinent,
  handleShowOptions,
  handleChooseContinent,
}) => {
  let clear = {
    color: "red",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <>
      <div className="select-flag" onClick={handleShowOptions}>
        <div className="mainFilter">
          <p>{continent === null ? "Filter by Region" : continent}</p>
          <span className="filterRegionArrow"></span>
        </div>
        {disabledOptions && (
          <>
            <div className="options">
              <p onClick={() => handleChooseContinent("Africa")}>Africa</p>
              <p onClick={() => handleChooseContinent("Americas")}>Americas</p>
              <p onClick={() => handleChooseContinent("Asia")}>Asia</p>
              <p onClick={() => handleChooseContinent("Europe")}>Europe</p>
              <p onClick={() => handleChooseContinent("Oceania")}>Oceania</p>
            </div>
          </>
        )}
      </div>
      {continent !== null && (
        <p
          className="clearText"
          onClick={() => {
            setContinent(null);
            setSearchFlag("");
          }}
        >
          <span style={clear}>X </span>Clear filter
        </p>
      )}
    </>
  );
};
