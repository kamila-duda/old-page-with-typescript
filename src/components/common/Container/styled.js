import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: ${({ align }) => (align ? align : "center")};
  padding: 40px 20px 20px;
  border-radius: 70px 70px 0% 0%;
  margin-top: ${(props) => props.marginTop};
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.backgroundColor};
  ${({ homepage }) =>
    homepage &&
    css`
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      margin: 0;
      padding: 4% 2.5%;
      flex-wrap: nowrap;
      z-index: -1;
      @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
        flex-wrap: wrap;
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 5px;
  }
`;
