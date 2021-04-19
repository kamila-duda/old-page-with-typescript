import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border-radius: 70px 70px 0% 0%;
  margin-top: ${(props) => props.marginTop};
  margin-left: auto;
  margin-right: auto;
  background: ${(props) => props.backgroundColor};
  padding-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 5px;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: space-around;
  align-items: ${({ align }) => (align ? align : "center")};
  padding: 40px 10px;
  ${({ homepage }) =>
    homepage &&
    css`
      font-family: "Montserrat", sans-serif;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 4% 2%;
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
