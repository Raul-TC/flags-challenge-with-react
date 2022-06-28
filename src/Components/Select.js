import React, { useState } from "react";
export const Select = () => {
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [continent, setContinent] = useState("");

  let clear = {
    color: "red",
    fontWeight: "bold",
  };
  const handleShowOptions = () => {
    if (!disabledOptions) setDisabledOptions(true);
    else {
      setDisabledOptions(false);
    }
  };
  const handleChooseContinent = (continet) => {
    setContinent(continet);
    setDisabledOptions(false);
  };
  return (
    <>
      <div className="select-flag" onClick={handleShowOptions}>
        <div className="mainFilter">
          <p>Filter by Region</p>
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
      {continent !== "" && (
        <p onClick={() => setContinent("")}>
          {" "}
          <span style={clear}>X </span>clear filter
        </p>
      )}
    </>
  );
};
