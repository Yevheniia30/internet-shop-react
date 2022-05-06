import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { useTransition, animated } from "react-spring";

import { privateRoutes, publicRoutes } from "../routes";
import Shop from "../pages/Shop";

import { Header } from "../widgets/header";
// import { Main } from "../widgets/main";

console.log("privateRoutes", privateRoutes);
console.log("publicRoutes", publicRoutes);

const AppRouter = () => {
  const isAuth = false;
  // const location = useLocation();
  // console.log("location", location);

  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0.5,
  //     // transform: "translateX(100%)",
  //   },
  //   enter: {
  //     opacity: 1,
  //     // transform: "translateX(0%)",
  //   },
  //   leave: {
  //     opacity: 0,
  //     // transform: "translateX(-100%)",
  //   },
  // });

  return (
    <>
      <Header />
      {/* {transitions((props, item) => ( */}
      <div>
        <div style={{ position: "absolute", width: "100%" }}>
          <Switch>
            {isAuth
              ? privateRoutes.map(({ path, Component }) => (
                  <Route
                    exact
                    path={path}
                    render={() => <Component />}
                    key={path}
                  />
                ))
              : publicRoutes.map(({ path, Component }) => (
                  <Route
                    exact
                    path={path}
                    render={() => <Component />}
                    key={path}
                  />
                ))}
            <Redirect to="./login" />
          </Switch>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default AppRouter;
