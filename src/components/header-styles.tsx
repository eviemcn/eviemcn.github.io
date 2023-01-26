import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 5;
`;

export const FooterContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 5;
  padding: 10px;
  position: fixed;
  bottom: 0px;
  > a {
    color: black;
    padding: 5px;
  }
  > a :hover {
    color: #a3b051;
  }
  > a:focus-visible {
    color: #a3b051;
    outline: none;
  }
`;

export const Logo = styled.div`
  :hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  text-align: right;
  letter-spacing: 1px;
  margin: none;
  padding: 0 15px;
  color: black;
  text-decoration: none;
  :hover,
  :focus {
    color: #a3b051;
    outline: none;
  }
`;

export const RightLinks = styled.div`
  margin-left: auto;
  margin-right: 20px;
  font-family: "Bold";
  display: flex;
  align-items: center;
`;
