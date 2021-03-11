import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 3px solid ${({theme})=>theme.color.secondColor};
  border-bottom: 3px solid ${({theme})=>theme.color.secondColor};
  margin-bottom: 60px;
`;
export const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
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
  font-weight: bold;
  margin: 35px 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.secondColor};
  border: 3px solid ${({theme})=>theme.color.primaryColor};
  border-radius: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryColor};
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
