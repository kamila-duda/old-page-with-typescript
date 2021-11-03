import React from "react";
import { StyledFooter, StyledText, StyledWrapper } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledText>Copyright 2021 © All rights reserved.</StyledText>
        <StyledText>designed by Kamila Duda</StyledText>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
