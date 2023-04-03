import React from "react";
import { Routes, Route } from "react-router-dom";
import Routing from "../../routes/Routing";

const LayoutRouting = () => {
  return (
    <>
      <Routes>
        {Routing &&
          Routing.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
      </Routes>
    </>
  );
};

export default LayoutRouting;
