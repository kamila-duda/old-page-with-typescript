import styled from "styled-components";

export const StyledSubtitle = styled.h2`
  width: 100%;
  text-transform: uppercase;
  position: relative;
  color: ${({theme})=>theme.color.white};
  &:before{
      content: "";
      position: absolute;
      background-color: ${({theme})=>theme.color.primaryColor};
      height: 130%;
      width: 30%;
      top: -15%;
      left: -15%;
      z-index: -1;
      border-radius: 15px;
  }
`;