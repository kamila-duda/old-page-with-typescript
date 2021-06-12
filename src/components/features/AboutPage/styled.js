import styled, { css } from "styled-components";

export const StyledImageWrapper = styled.div`
  width: 30%;
  align-self: flex-start;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    order: 2;
    width: 100%;
    margin-bottom: 30px;
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }
`;
export const StyledText = styled.p`
  position: relative;
  margin: 0 0 30px;
  font-size: 16px;
  font-style: italic;
  line-height: 2.5;
  letter-spacing: 2px;
  min-height: 300px;
  left: 0px;
  color: ${({ theme }) => theme.color.darknestWhite};
  &::after {
    content: "_";
    position: absolute;
    animation: pulse 0.5s infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 10px;
    letter-spacing: 1px;
    line-height: 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
    letter-spacing: 0px;
  }
`;
export const StyledWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    order: 1;
    width: 100%;
  }
`;
export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    height: 40px;
  }
`;
export const StyledListItem = styled.li`
  width: 33%;
  padding-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.darknestWhite};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.color.lightPrimaryColor};
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.lighterPrimaryColor};
    border-radius: 25px 25px 0 0;
    &:hover {
      border-bottom: 1px solid transparent;
    }
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: ${({ theme }) => theme.color.primaryColor};
        &:hover {
          border-bottom: 1px solid transparent;
        }
      `}
  }
`;
export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.lighterPrimaryColor};
  letter-spacing: 3px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;
export const StyledContent = styled.div`
  height: ${({ height }) => height}px;
  padding: 10px;
  display: none;
  ${({ isActive }) =>
    isActive &&
    css`
      display: block;
      animation: fadeEffect 1s;
      @keyframes fadeEffect {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 20px 10px;
  }
`;
export const StyledContentItem = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darknestWhite};
  letter-spacing: 1.2px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;
export const StyledDecorationItem = styled.span`
  display: block;
  font-size: 20px;
  padding-bottom: 5px;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;
