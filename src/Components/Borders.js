import React from "react";
import { Link } from "react-router-dom";

export const Borders = ({ border }) => {
  return (
    <>
      <Link to={`../flags/${border}`}>{border}</Link>
    </>
  );
};
