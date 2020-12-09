import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledText = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;
  min-height: 160px;
  width: 100%;
  margin-top: 20px;
  text-align: justify;
  &::after {
    content: "_";
    position: absolute;
    font-weight: bold;
    animation: pulse 0.5s infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
    font-weight: normal;
  }
`;
export const StyledList = styled.ul`
  flex-basis: 45%;
  min-height: 200px;
  align-self: flex-start;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 15px;
  box-shadow: 3px 4px 14px -2px #000000;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 13px;
    flex-basis: 100%;
    min-height: 140px;
  }
`;
export const StyledTitle = styled.h2`
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    font-size: 14px;
  }
`;
