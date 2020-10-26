import styled, { css } from "styled-components";

export const StyledHomePage = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
export const StyledText = styled.h1`
  color: ${({ theme }) => theme.color.fontColor};
  font-size: 60px;
  font-weight: bold;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 30px;
  }
  ${({ colored }) =>
    colored &&
    css`
      color: ${({ theme }) => theme.color.primaryColor};
      font-size: 40px;
      &::after {
        content: "_";
        position: absolute;
        animation: pulse 1s infinite;
        @keyframes pulse {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 20px;
  }
      @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 10px;
  }
    `}
`;
export const StyledContainer = styled.div`

`;
export const StyledImage = styled.img`
  height: 90%;
  object-fit: cover;
  align-self: flex-end;
  right: 100px;
  bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    height: 75%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    height: 60%;
  }
`;
