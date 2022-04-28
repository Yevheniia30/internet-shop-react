import React from "react";
import { Main } from "../widgets/main";
import { useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
// import { Header } from "../widgets/header";

const Device = () => {
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

  return (
    <>
      <Main back="#632b2b" padding="20px">
        {/* {transitions((props, item) => ( */}
        {/* <animated.div style={props}> */}
        {/* <div style={{ position: "absolute" }} location={item}> */}
        <img
          src="https://cdn.pixabay.com/photo/2016/11/14/02/33/adult-1822413_960_720.jpg"
          alt="img"
        />
        {/* </div> */}
        {/* </animated.div> */}
        {/* ))} */}
      </Main>
    </>
  );
};

export default Device;
