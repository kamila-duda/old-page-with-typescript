import React from "react";
import { StyledContainer } from "./styled";

const Container = ({
  children,
  homepage,
  backgroundColor,
  marginTop,
  align,
  direction,
}) => {
  return (
    <StyledContainer
      {...{ homepage, backgroundColor, marginTop, align, direction }}
    >
      {children}
    </StyledContainer>
  );
};
export default Container;
