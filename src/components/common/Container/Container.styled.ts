import styled, { css } from "styled-components";
import { ContainerProps } from "./Container";

export const StyledContainer = styled.div<
  Pick<ContainerProps, "marginBottom" | "marginTop" | "backgroundColor">
>(
  ({ marginBottom, marginTop, backgroundColor, theme: { breakpoint } }) => css`
    position: relative;
    width: 100%;
    min-height: 100vh;
    border-radius: 70px 70px 0% 0%;
    margin-top: ${marginTop};
    background: ${backgroundColor};
    padding-bottom: 40px;
    margin-bottom: ${marginBottom ?? "-5%"};
    @media (max-width: ${breakpoint.s}) {
      border-radius: 25px 25px 0% 0%;
    }
  `
);
export const StyledWrapper = styled.div<
  Pick<ContainerProps, "direction" | "align" | "homepage">
>(
  ({ direction, align, homepage, theme: { breakpoint } }) => css`
    max-width: 1400px;
    min-height: 100vh;
    margin: 0 auto;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction ? direction : "row"};
    justify-content: space-between;
    align-items: ${align ? align : "center"};
    padding: 80px;

    @media (max-width: ${breakpoint.s}) {
      padding: 25px;
      flex-direction: column;
      justify-content: space-around;
    }
    @media (max-width: ${breakpoint.xs}) {
      padding: 15px;
    }
    ${homepage &&
    css`
      font-family: "Montserrat", sans-serif;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      padding: 4% 2%;
      flex-wrap: nowrap;
      justify-content: space-around;
      z-index: -1;
      @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
        padding-top: 60px;
        flex-wrap: wrap;
        justify-content: space-around;
      }
    `}
  `
);
