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
    <StyledContainer {...{  backgroundColor, marginTop}}
    >
      <StyledWrapper {...{ homepage, align, direction }}>
      {children}
      </StyledWrapper>
    </StyledContainer>
  );
};
export default Container;
