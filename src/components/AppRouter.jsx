import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

console.log("privateRoutes", privateRoutes);
console.log("publicRoutes", publicRoutes);

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(({ path, Component }) => (
            <Route exact path={path} element={<Component />} key={path} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route exact path={path} element={<Component />} key={path} />
          ))}
      <Route path="/" element={<div>Default Page Content</div>} />
    </Routes>
  );
};

export default AppRouter;
