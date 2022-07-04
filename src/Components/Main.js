import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Flag } from "../pages/Flag";
import { Flags } from "./Flags";

export const Main = () => {
  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/flags" />} />
          <Route path="/flags" element={<Flags />} />
          <Route path="flags/:flag" element={<Flag />} />
          <Route path="*" element={<Error404 />} />
          <Route path="flags/none" element={<Navigate to={"/flags"} />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
