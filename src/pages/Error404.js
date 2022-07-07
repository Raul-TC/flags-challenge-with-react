import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="error">
      <span className="error404"></span>
      <Link to="../flags/">Go to Home</Link>
    </div>
  );
};
