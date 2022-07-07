import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { helpHttp } from "../helpers/helphttp";

export const Borders = ({ border }) => {
  const [nameBorder, setnameBorder] = useState();
  let { flag } = useParams();

  useEffect(() => {
    helpHttp()
      .get(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((el) => {
        if (border === "None") {
          setnameBorder("None");
        } else {
          setnameBorder(el[0].name.common);
        }
      });
  }, [flag, border, nameBorder]);

  return (
    <>
      <Link to={`../flags/${border}`}>{nameBorder}</Link>
    </>
  );
};
