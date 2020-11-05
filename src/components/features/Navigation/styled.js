import styled, { css } from "styled-components";
import tlo from "../../../images/tlo.png";

export const StyledNav = styled.nav`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0;
  padding-right: 20px;
  margin: 0;
  position: fixed;
  width: 100%;
  background-image: url(${tlo});
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0;
  }
`;
export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;
export const StyledNavItem = styled.li`
  padding: 0px 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 15px;
    font-size: 18px;
  }
`;
export const StyledNavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.primaryColor};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 70%;
    height: 2px;
    left: 15%;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 1s ease-in-out;
    background-color: ${({ theme }) => theme.color.primaryColor};
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;
export const StyledIcon = styled.div`
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 20px;
  background-image: url(${tlo});
  border-radius: 10px;
  color: ${({ theme }) => theme.color.primaryColor};
`;
export const StyledNavListMobile = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  margin: -218px 0 0;
  ${({ open }) =>
    open &&
    css`
      margin: 0;
    `}
  @media (min-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
`;
