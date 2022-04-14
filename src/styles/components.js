import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #cecece;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
`;

export const FormWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};

  justify-content: flex-end;
  width: 100%;
  /* margin: 0 auto; */
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0 auto;
  /* margin-bottom: 10px; */
  padding: 2px 5px;
  border-radius: 6px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  /* background-color: #fff; */
  background-color: ${(props) => props.back || "#fff"};
  padding: 2px 5px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #acacac;
  }
  display: flex;
  /* align-self: ${(props) => props.align || "stretch"}; */
`;

export const ErrorText = styled.p`
  color: red;
`;
