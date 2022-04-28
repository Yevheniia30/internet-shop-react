import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import { Main } from "../widgets/main";
// import { Header } from "../widgets/header";

const Shop = () => {
  const [, set] = useState(true);

  const location = useLocation();
  console.log("location", location);

  // const transitions = useTransition(location, {
  //   from: {
  //     opacity: 0,
  //     transform: "translateX(100%)",
  //   },
  //   enter: {
  //     opacity: 1,
  //     transform: "translateX(0%)",
  //   },
  //   leave: {
  //     opacity: 0,
  //     transform: "translateX(-100%)",
  //   },
  // });

  useEffect(() => {}, []);

  return (
    <Main back="#57d9dd">
      {/* {transitions((props, item) => ( */}
      {/* <animated.div style={props}> */}
      {/* <div style={{ position: "absolute" }} location={item}> */}
      <h2>Shop</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
        reprehenderit ea ipsam, molestias quod nesciunt totam, optio in pariatur
        aliquam non? Ea, quae. Aspernatur nesciunt molestias temporibus earum
        reprehenderit, distinctio animi deserunt quo sed autem explicabo a harum
        atque nemo suscipit minus soluta, eos corrupti ullam! Illo dignissimos
        ad maiores.
      </p>
      {/* </div> */}
      {/* </animated.div> */}
      {/* ))} */};
    </Main>
  );
};

export default Shop;
