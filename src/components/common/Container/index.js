import React from "react";
import { StyledContainer } from "./styled";

const Container = ({ children, homepage }) => {
  return <StyledContainer homepage={homepage}>{children}</StyledContainer>;
};
export default Container;
