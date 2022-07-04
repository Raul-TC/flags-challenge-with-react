import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Borders } from "../Components/Borders";
import { Loader } from "../Components/Loader";
import { helpHttp } from "../helpers/helphttp";

export const Flag = () => {
  let { flag } = useParams();

  const [flagInfo, setFlagInfo] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    setLoading(true);
    let url = `https://restcountries.com/v3.1/alpha/${flag}`;
    helpHttp()
      .get(url)
      .then((el) => {
        setLoading(false);

        if (!el[0].borders) {
          setBorders(["None"]);
        } else {
          setBorders(el[0].borders);
        }
        setFlagInfo(el);
      });
  }, [flag]);

  // let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const getNativeName = () => {
    let valores = Object.values(flagInfo[0].name.nativeName);
    for (let i = 0; i < valores.length; i++) {
      return valores[0].official;
    }
  };

  const getCurrencies = () => {
    let valores = Object.values(flagInfo[0].currencies);
    for (let i = 0; i < valores.length; i++) {
      return valores[i].name;
    }
  };

  const getLanguages = () => {
    let valores = Object.values(flagInfo[0].languages);
    let lang = "";

    for (let i = 0; i < valores.length; i++) {
      lang = `${valores}`;
    }

    return lang;
  };
  let internationalNumberFormat = new Intl.NumberFormat("en-US");

  return (
    <>
      {Loading && <Loader />}

      {flagInfo !== null && (
        <>
          <Link className="backHome" to="/flags">
            <div className="back"></div>
            <p>Back</p>
          </Link>
          <div className="container-flag">
            <div className="imgContainer">
              <img src={flagInfo[0].flags.svg} alt={flagInfo[0].name.common} />
            </div>

            {/* Specs */}
            <div className="specs">
              <h1 className="title" data-dark="darkMode">
                {flagInfo[0].name.common}
              </h1>

              {/* All Data */}
              <div className="containerallData">
                <div className="country-spec">
                  <p>
                    <b>NativeName: </b> {getNativeName()}
                  </p>
                  <p>
                    <b>Population: </b>
                    {internationalNumberFormat.format(flagInfo[0].population)}
                  </p>
                  <p>
                    <b>Region: </b>
                    {flagInfo[0].region}
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    {flagInfo[0].subregion}
                  </p>
                  <p>
                    <b>Capital: </b> {flagInfo[0].capital}
                  </p>
                </div>
                <div className="frontier">
                  <p>
                    <b>Top Level Domain: </b>
                    {flagInfo[0].tld[0]}
                  </p>
                  <p>
                    <b>Currencies: </b>
                    {getCurrencies()}
                  </p>
                  <p>
                    <b>Languages: </b>
                    {getLanguages()}
                  </p>
                </div>
              </div>
              <div className="border">
                <p>
                  <b>Border Countries: </b>
                </p>
                <div className="bordeCountry">
                  {borders.map((border, index) => (
                    <Borders key={index} border={border} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
