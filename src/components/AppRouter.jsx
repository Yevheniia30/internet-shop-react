import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Shop from "../pages/Shop";

console.log("privateRoutes", privateRoutes);
console.log("publicRoutes", publicRoutes);

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(({ path, Component }) => (
            <Route exact path={path} element={<Component />} key={path} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route exact path={path} element={<Component />} key={path} />
          ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
