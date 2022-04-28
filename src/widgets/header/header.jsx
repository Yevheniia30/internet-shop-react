import styled from "styled-components";
import { privateRoutes, publicRoutes } from "../../routes";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  SHOP_ROUTE,
} from "@utils/constants";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  /* position: fixed; */
  /* z-index: 10; */
  background-color: #728b79;
  padding: 20px;
  width: 100%;
  display: flex;
`;

const Nav = styled(NavLink)`
  margin-right: 20px;
`;

// export const NavBar=styled.

export const Header = () => {
  return (
    <StyledHeader>
      {/* <NavBar> */}
      <Nav to={SHOP_ROUTE}>Shop</Nav>
      <Nav to={LOGIN_ROUTE}>Auth</Nav>
      <Nav to={BASKET_ROUTE}>Basket</Nav>
      <Nav to={DEVICE_ROUTE}>Device</Nav>
      <Nav to={ADMIN_ROUTE}>Admin</Nav>

      {/* </NavBar> */}
    </StyledHeader>
  );
};
