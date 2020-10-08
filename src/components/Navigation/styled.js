import styled from "styled-components";

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
`;
export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
`;
export const StyledNavItem = styled.li`
  padding: 10px;
`;
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${({theme})=> theme.color.primaryColor};
  &:hover {
    border-bottom: 2px solid ${({theme})=> theme.color.primaryColor};
  }
`;
