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
export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  transition: transform 1s ease-out;
  margin-left: 15px;
  @media (max-width: ${({theme})=>theme.breakpoint.s}){
    animation: pulseMobile 4s infinite linear;
  }
  @keyframes pulseMobile{
    100%{transform: scale(1.2)};
  }
`;
export const StyledLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 15px;
  padding: 20px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryColor};
  border: 4px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 15px;
  &:hover {
    color: ${({ theme }) => theme.color.lightPrimaryColor};
    border: 4px solid ${({ theme }) => theme.color.lightPrimaryColor};
    ${StyledFontAwesomeIcon} {
      transform: scale(1.2);
    }
  }
`;
