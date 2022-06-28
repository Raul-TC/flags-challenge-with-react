import React from "react";

export const FlagCard = ({ region, name, flags, capital, population }) => {
  const givenNumber = population;
  let internationalNumberFormat = new Intl.NumberFormat("en-US");
  return (
    <div className="flag">
      <div className="flag_image">
        <a href={name.common}>
          <img src={flags.svg && flags.png} alt={name.common} />
        </a>
      </div>
      <div className="flag_short__description">
        <h2 className="title_flag">{name.common}</h2>
        <div className="flag_description">
          <p>
            <b>Population</b>: {internationalNumberFormat.format(givenNumber)}
          </p>
          <p>
            <b>Region</b>: {region}
          </p>
          <p>
            <b>Capital</b>: {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
