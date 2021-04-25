import styled from "styled-components";

export const StyledText = styled.h1`
  top: 200px;
  left: 300px;
  color: ${({ theme }) => theme.color.fontColor};
  font-size: 52px;
  font-weight: bold;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 48px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 20px;
  }
`;
export const StyledColoredText = styled.h2`
  color: ${({ theme }) => theme.color.lightPrimaryColor};
  font-size: 46px;
  margin-bottom: 5px;
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
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 10px;
  }
`;
export const StyledImage = styled.img`
  position: relative;
  width: 68vh;
  height: 68vh;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 10px 10px 30px 0px ${({ theme }) => theme.color.primaryColor}24;
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin-top: 20px;
  }
`;
