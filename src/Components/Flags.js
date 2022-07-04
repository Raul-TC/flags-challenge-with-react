import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helphttp";

import { FlagCard } from "./FlagCard";
import { Loader } from "./Loader";
import { NavSearch } from "./NavSearch";

export const Flags = () => {
  const [db, setDb] = useState("");
  const [Loading, setLoading] = useState(false);
  const [searchFlag, setSearchFlag] = useState("");
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [continent, setContinent] = useState(null);

  useEffect(() => {
    setLoading(true);
    let url = "https://restcountries.com/v3.1/all";
    helpHttp()
      .get(url)
      .then((el) => {
        setLoading(false);
        setDb(el);
      });
  }, []);
  const handleFlagSearch = (e) => {
    setSearchFlag(e);
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
      <NavSearch
        setSearchFlag={setSearchFlag}
        handleFlagSearch={(e) => handleFlagSearch(e)}
        handleShowOptions={handleShowOptions}
        handleChooseContinent={handleChooseContinent}
        continent={continent}
        setContinent={setContinent}
        disabledOptions={disabledOptions}
        setDisabledOptions={setDisabledOptions}
      />
      {Loading && <Loader />}
      <div id="containerFlags">
        {db.length > 0 &&
          (!continent
            ? db
                .filter((el) => el.name.common.includes(searchFlag))
                .map((el) => (
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
            : db
                .filter(
                  (el) =>
                    el.name.common.includes(searchFlag) &&
                    el.region.includes(continent)
                )
                .map((el) => (
                  <FlagCard
                    key={el.name.common}
                    name={el.name}
                    flags={el.flags}
                    population={el.population}
                    region={el.region}
                    capital={el.capital}
                    cca2={el.cca2}
                  />
                )))}
      </div>
    </>
  );
};
