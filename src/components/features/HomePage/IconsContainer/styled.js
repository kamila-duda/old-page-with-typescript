import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledWrapperIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 20px;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: transform 1s;
  font-size: 30px;
  color: ${({theme})=>theme.color.primaryColor};
  &:hover {
    color: ${({ theme }) => theme.color.lightPrimaryColor};
    transform: scale(1.2);
  }
`;