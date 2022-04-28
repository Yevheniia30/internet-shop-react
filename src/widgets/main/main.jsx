import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  overflow: hidden;
  padding: ${(props) => props.padding || "0"};
  height: 100vh;
  background-color: ${(props) => props.back || "#cecece"};
`;

// export const Main = (props) => {
//   return <MainStyled></MainStyled>;
// };
