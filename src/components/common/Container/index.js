import React from "react";
import { StyledContainer } from "./styled";

const Container = ({
  children,
  homepage,
  backgroundColor,
  marginTop,
  align,
}) => {
  return (
    <StyledContainer {...{ homepage, backgroundColor, marginTop, align }}>
      {children}
    </StyledContainer>
  );
};
export default Container;
