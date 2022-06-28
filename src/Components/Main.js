import React from "react";
import { HashRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { Flags } from "./Flags";
import { NavSearch } from "./NavSearch";

export const Main = () => {
  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/flags" />} />
          <Route
            path="/flags"
            element={
              <>
                <NavSearch />
                <Flags />
              </>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
