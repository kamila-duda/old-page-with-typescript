import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledWrapperIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: transform 1s;
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
  &:hover {
    color: ${({ theme }) => theme.color.primaryColor};
    transform: scale(1.2);
  }
`;
export const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryColor};
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    ${StyledFontAwesomeIcon} {
      color: ${({ theme }) => theme.color.primaryColor};
      transform: scale(1.05);
    }
  }
`;
