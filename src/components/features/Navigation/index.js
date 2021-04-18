import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
  StyledIconWrapper,
  StyledLink,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useScrollSections } from "react-scroll-section";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = useScrollSections();
  return (
    <StyledNav>
      <StyledIconWrapper>
        <StyledLink
          href="https://www.linkedin.com/in/kamila-duda"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink href="https://github.com/kamila-duda" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </StyledLink>
      </StyledIconWrapper>
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
