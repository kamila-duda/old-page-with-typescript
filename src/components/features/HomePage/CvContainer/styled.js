import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  border-radius: 15px;
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
