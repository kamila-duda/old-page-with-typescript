import React from "react";
import { StyledContainer, StyledWrapper } from "./styled";

const Container = ({
  children,
  homepage,
  backgroundColor,
  marginTop,
  align,
  direction,
  marginBottom
}) => {
  return (
    <StyledContainer backgroundColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
      <StyledWrapper homepage={homepage} align={align} direction={direction}>
        {children}
      </StyledWrapper>
    </StyledContainer>
  );
};
export default Container;
