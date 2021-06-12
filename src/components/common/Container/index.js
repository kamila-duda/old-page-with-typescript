import React from "react";
import { StyledContainer, StyledWrapper } from "./styled";

const Container = ({
  children,
  homepage,
  backgroundColor,
  marginTop,
  align,
  direction,
}) => {
  return (
    <StyledContainer backgroundColor={backgroundColor} marginTop={marginTop}>
      <StyledWrapper homepage={homepage} align={align} direction={direction}>
        {children}
      </StyledWrapper>
    </StyledContainer>
  );
};
export default Container;
