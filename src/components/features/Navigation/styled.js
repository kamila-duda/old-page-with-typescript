import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 20px;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0;
  }
`;
export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    display: none;
  }
`;
export const StyledNavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.primaryColor};
  position: relative;
`;
export const StyledNavItem = styled.li`
  padding: 15px 30px;
  letter-spacing: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 15px;
    font-size: 18px;
  }
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.lightPrimaryColor};
    ${StyledNavLink} {
      color: ${({ theme }) => theme.color.lightPrimaryColor};
    }
  }
`;
export const StyledIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 20px;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50px;
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
      width: 99%;
      ${StyledIcon} {
        border: 1px solid ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.white};
      }
    `}
  @media (min-width: ${({ theme }) => theme.breakpoint.another}) {
    display: none;
  }
`;
