import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border-radius: 70px 70px 0% 0%;
  margin-top: ${(props) => props.marginTop};
  background: ${(props) => props.backgroundColor};
  padding-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 10px;
    border-radius: 25px 25px 0% 0%;
  }
`;
export const StyledWrapper = styled.div`
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: space-between;
  align-items: ${({ align }) => (align ? align : "center")};
  padding: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 5px;
    flex-direction: column;
    justify-content: space-around;
  }
  ${({ homepage }) =>
    homepage &&
    css`
      font-family: "Montserrat", sans-serif;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      padding: 4% 2%;
      flex-wrap: nowrap;
      z-index: -1;
      @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
        padding-top: 100px;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    `}
`;
