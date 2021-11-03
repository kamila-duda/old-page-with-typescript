import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 10px 10px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 70px 10px;
  }
`;
export const StyledParagraph = styled.p`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  color: white;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 16px;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  font-weight: bold;
  transition: transform 1s ease-out;
  margin-left: 15px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    animation: pulseMobile 4s infinite linear;
  }
  @keyframes pulseMobile {
    100% {
      transform: scale(1.2);
    }
  }
`;
export const StyledLink = styled.a`
  font-size: 15px;
  margin: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.darknestWhite};
  background-color: ${({ diffrentColor, theme }) =>
    diffrentColor ? theme.color.primaryColor : theme.color.lightPrimaryColor};
  border: 3px solid
    ${({ diffrentColor, theme }) =>
      diffrentColor ? theme.color.primaryColor : theme.color.lightPrimaryColor};
  border-radius: 40px;
  &:hover {
    border: 3px solid ${({ theme }) => theme.color.darknestWhite};
    color: ${({ theme }) => theme.color.white};
    ${StyledFontAwesomeIcon} {
      transform: scale(1.2);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin: 10px 5px;
    font-size: 12px;
    padding: 10px;
  }
`;
