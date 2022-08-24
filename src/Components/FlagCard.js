import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export const FlagCard = ({
  region,
  name,
  flags,
  capital,
  population,
  cca2,
}) => {
  const { DarkTheme } = useContext(ThemeContext);
  const givenNumber = population;
  let internationalNumberFormat = new Intl.NumberFormat("en-US");
  return (
    <div className={DarkTheme ? "flag darkMode" : "flag"}>
      <div className="flag_image">
        <Link to={`${cca2}`}>
          <img src={flags.svg} alt={name.common} />
        </Link>
      </div>
      <div className="flag_short__description">
        <h2 className="title_flag">{name.common}</h2>
        <div className="flag_description">
          <p>
            <b>Population:</b> {internationalNumberFormat.format(givenNumber)}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
