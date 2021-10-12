import React from "react";
import { StyledContainer, StyledWrapper } from "./Container.styled";

export interface ContainerProps {
  children: React.ReactNode;
  homepage?: boolean;
  backgroundColor?: string;
  marginTop?: string;
  align?: string;
  direction?: string;
  marginBottom?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  homepage,
  backgroundColor,
  marginTop,
  align,
  direction,
  marginBottom,
}) => {
  return (
    <StyledContainer
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <StyledWrapper homepage={homepage} align={align} direction={direction}>
        {children}
      </StyledWrapper>
    </StyledContainer>
  );
};
