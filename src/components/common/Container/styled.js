import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px 20px;
  margin: 40px 0px;
  ${({ homepage }) =>
    homepage &&
    css`
      height: 100vh;
      position: relative;
      flex-wrap: nowrap;
      margin: 0;
      @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
        flex-wrap: wrap;
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 5px;
  }
`;
