import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helphttp";
import { FlagCard } from "./FlagCard";
import { Loader } from "./Loader";

export const Flags = () => {
  const [db, setDb] = useState("");
  const [Loading, setLoading] = useState(false);

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

  return (
    <>
      {Loading && <Loader />}
      <div id="containerFlags">
        {db.length > 0 &&
          db.map((el, index) => (
            <FlagCard
              key={index}
              name={el.name}
              flags={el.flags}
              population={el.population}
              region={el.region}
              capital={el.capital}
            />
          ))}
      </div>
    </>
  );
};
