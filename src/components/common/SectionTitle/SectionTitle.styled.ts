import styled, { css } from "styled-components";
import { SectionTitleProps } from "./SectionTitle";

export const StyledSectionTitle = styled.h2<Pick<SectionTitleProps, "color">>(
  ({ color, theme: { breakpoint } }) => css`
    margin: 15px auto;
    padding-bottom: 10px;
    color: ${color};
    letter-spacing: 3px;
    font-size: 18px;
    border-bottom: 1px solid ${color};
    @media (max-width: ${breakpoint.s}) {
      font-size: 16px;
    }
  `
);
