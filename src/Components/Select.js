import React, { useState } from "react";
export const Select = () => {
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [continent, setContinent] = useState("");

  let clear = {
    color: "red",
    fontWeight: "bold",
  };
  const showOptions = () => {
    if (!disabledOptions) setDisabledOptions(true);
    else {
      setDisabledOptions(false);
    }
  };
  const chooseContinent = (continet) => {
    setContinent(continet);
    setDisabledOptions(false);
  };
  return (
    <>
      <div className="select-flag" onClick={showOptions}>
        <div className="mainFilter">
          <p>Filter by Region</p>
          <span className="filterRegionArrow"></span>
        </div>
        {disabledOptions && (
          <>
            <div className="options">
              <p onClick={() => chooseContinent("Africa")}>Africa</p>
              <p onClick={() => chooseContinent("Americas")}>Americas</p>
              <p onClick={() => chooseContinent("Asia")}>Asia</p>
              <p onClick={() => chooseContinent("Europe")}>Europe</p>
              <p onClick={() => chooseContinent("Oceania")}>Oceania</p>
            </div>
          </>
        )}
      </div>
      {continent !== "" && (
        <p onClick={() => setContinent("")}>
          {" "}
          <span style={clear}>X</span>clear filter
        </p>
      )}
    </>
  );
};
