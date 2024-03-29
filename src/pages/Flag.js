import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Borders } from "../Components/Borders";
import { Loader } from "../Components/Loader";
import ThemeContext from "../context/ThemeContext";
import { Error404 } from "./Error404";

export const Flag = () => {
  const [flagInfo, setFlagInfo] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [borders, setBorders] = useState([]);
  const [err, seterr] = useState(false);

  let { flag } = useParams();
  const { DarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    let url = `https://restcountries.com/v3.1/alpha/${flag}`;

    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((el) => {
        setLoading(false);
        if (!el[0].borders) {
          setFlagInfo(el);
          setBorders(["None"]);
          seterr(false);
        } else {
          setBorders(el[0].borders);
          setFlagInfo(el);
          seterr(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setFlagInfo(null);
        seterr(true);
      });
  }, [flag]);

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
          <div className="containerButton">
            <Link
              className={DarkTheme ? "backHome darkMode" : "backHome"}
              to="/flags"
            >
              <span className={DarkTheme ? "back darkMode" : "back"}></span>
              <p>Back</p>
            </Link>
          </div>
          <div
            className={DarkTheme ? "container-flag darkMode" : "container-flag"}
          >
            <div className="imgContainer">
              <img src={flagInfo[0].flags.svg} alt={flagInfo[0].name.common} />
            </div>

            <div className="specs">
              <h1 className="title" data-dark="darkMode">
                {flagInfo[0].name.common}
              </h1>

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
                    {flagInfo[0].tld === undefined
                      ? "undefined"
                      : flagInfo[0].tld[0]}
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
                  {borders.map((border, index) =>
                    !border ? (
                      <Borders key={index} border="null" />
                    ) : (
                      <Borders key={index} border={border} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {err && <Error404 />}
    </>
  );
};
