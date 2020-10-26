import React, { useRef, useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const navRef = useRef();
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
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
      <StyledNavListMobile open={isOpen}>
      <StyledNavItem>
          <StyledNavLink href="#about">&#60;About/&#62;</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#education">&#60;Projects/&#62;</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#experience">&#60;Contact/&#62;</StyledNavLink>
        </StyledNavItem>
        <StyledIcon onClick={()=>toggleMenu()}>
          <FontAwesomeIcon icon={faCode} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
export default Navigation;
