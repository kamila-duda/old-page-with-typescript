import React, { useState } from "react";
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
import { useScrollSections } from "react-scroll-section";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = useScrollSections();
  return (
    <StyledNav>
      <StyledNavList>
        {sections.map(({ id, onClick, selected }) => (
          <StyledNavItem key={id}>
            <StyledNavLink onClick={onClick} selected={selected}>
              {id}
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {sections.map(({ id, onClick, selected }) => (
          <StyledNavItem key={id}>
            <StyledNavLink
              onClick={() => {
                onClick();
                setIsOpen(!isOpen);
              }}
              selected={selected}
            >
              {id}
            </StyledNavLink>
          </StyledNavItem>
        ))}
        <StyledIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faCode} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
export default Navigation;
