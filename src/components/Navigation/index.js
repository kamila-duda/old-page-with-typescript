import React from "react";
import { StyledNav, StyledNavList, StyledNavItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink href="#about">&#60;About/&#62;</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#education">&#60;Projects/&#62;</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#experience">&#60;Contact/&#62;</StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
  );
};
export default Navigation;
