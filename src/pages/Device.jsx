import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { Main } from "../widgets/main";

import { useDispatch, useSelector } from "react-redux";
// import { getCount, getPosts } from "../redux/toolkitSelector";
import { getCount, getPosts } from "../redux/toolkit/toolkitSelector";

// import { getPostsReq } from "../redux/toolkitSelector";

import { getAllPosts } from "../redux/toolkit/toolkitOperations";
import { increment, decrement } from "../redux/toolkit/toolkitSlice";

// import { decrement, increment } from "../redux/toolkitReducer";
// import { useLocation } from "react-router-dom";
// import { useTransition, animated } from "react-spring";
// import { Header } from "../widgets/header";

export const move = keyframes`
    from {
		opacity: 0;
        /* transform : translateY(-500px)  */
	}
    to {
		opacity: 1;
        /* transform : tran4slateY(0px) */
    }
   
`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  /* background-color: red; */
  animation: ${(props) =>
    !props.isGone &&
    css`
      ${move} 4s linear
    `};
`;

const Btn = styled.button`
  margin-right: 15px;
  padding: 10px;
  background-color: #7c7a7a;
  border-radius: 6px;
  &:hover {
    background-color: #f0b9b9;
  }
`;

const Device = () => {
  const count = useSelector(getCount);
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  console.log("posts", posts);

  return (
    <>
      <Main back="#504c55" padding="20px">
        {/* <Btn onClick={() => dispatch(getAllPosts())}>Get Posts</Btn> */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
        <h3>Count: {count}</h3>
        <>
          <Btn onClick={() => dispatch(increment())}>increment</Btn>
          <Btn onClick={() => dispatch(decrement())}>decrement</Btn>
        </>

        {/* <img
          src="https://cdn.pixabay.com/photo/2016/11/14/02/33/adult-1822413_960_720.jpg"
          alt="img"
        /> */}
        <Wrapper />
      </Main>
    </>
  );
};

export default Device;
