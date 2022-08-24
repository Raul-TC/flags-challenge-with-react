import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Borders = ({ border }) => {
  const [nameBorder, setnameBorder] = useState();
  let { flag } = useParams();

  useEffect(() => {
    if (border === "None") {
      setnameBorder("None");
    } else {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => (res.ok ? res.json() : Promise.reject()))
        .then((el) => {
          setnameBorder(el[0].name.common);
        });
    }
  }, [flag, border, nameBorder]);

  return (
    <>
      <Link to={`../flags/${border}`}>{nameBorder}</Link>
    </>
  );
};
