import { ReactComponent as ReactLogo } from "../logo.svg";
import React, { MouseEvent } from "react";
import { HeaderContainer, Logo, NavItem, RightLinks } from "./header-styles";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <ReactLogo />
      </Logo>
      <RightLinks>
        <NavItem tabIndex="1" to={"/"}>
          Home
        </NavItem>
        <NavItem tabIndex="1" to={"/projects"}>
          Projects
        </NavItem>
        <NavItem tabIndex="1" to={"/music"}>
          Music
        </NavItem>
      </RightLinks>
    </HeaderContainer>
  );
};
