import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledSubtitle = styled.h2`
  width: 100%;
  text-transform: uppercase;
`;
export const StyledLine = styled.p`
  width: 100%;
  text-align: center;
`;
export const StyledContainer = styled.div`
  margin-bottom: 30px;
`;
export const StyledLink = styled.a`
  font-size: 120px;
  margin: 5px 15px;
  text-decoration: none;
  margin: 20px;
  color: ${({ theme }) => theme.color.primaryColor};
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: transform 1s;
  &:hover {
    color: ${({ theme }) => theme.color.lightPrimaryColor};
    transform: scale(1.2);
  }
`;
