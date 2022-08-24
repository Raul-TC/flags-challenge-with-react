import { createContext, useEffect, useState } from "react";

const FlagContext = createContext();

const FlagProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [searchFlag, setSearchFlag] = useState("");
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [continent, setContinent] = useState(null);
  const [emptyFilter, setemptyFilter] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = "https://restcountries.com/v3.1/all";

    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((el) => {
        setLoading(false);
        setDb(el);
      });
  }, []);

  useEffect(() => {
    const data = document.querySelectorAll(".flag");
    if (data.length === 0) {
      setemptyFilter(true);
    } else {
      setemptyFilter(false);
    }
  }, [searchFlag]);

  const handleFlagSearch = (e) => {
    setSearchFlag(e.target.value);
  };

  const handleShowOptions = () =>
    !disabledOptions ? setDisabledOptions(true) : setDisabledOptions(false);

  const handleChooseContinent = (continet) => {
    setContinent(continet);
    setDisabledOptions(false);
  };

  const data = {
    db,
    setDb,
    Loading,
    setLoading,
    searchFlag,
    setSearchFlag,
    disabledOptions,
    setDisabledOptions,
    continent,
    setContinent,
    emptyFilter,
    handleFlagSearch,
    handleShowOptions,
    handleChooseContinent,
  };

  return <FlagContext.Provider value={data}>{children}</FlagContext.Provider>;
};

export { FlagProvider };
export default FlagContext;
