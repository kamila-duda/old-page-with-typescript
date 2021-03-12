import styled from "styled-components";

export const StyledText = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;
  min-height: 160px;
  width: 100%;
  margin-top: 20px;
  text-align: justify;
  &::after {
    content: "_";
    position: absolute;
    font-weight: bold;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
    font-weight: normal;
  }
`;
export const StyledListContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const StyledList = styled.ul`
  width: 100%;
  min-height: 200px;
  margin: 8px;
  padding: 8px 8px 8px 40px;
  border: 3px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 13px;
    flex-basis: 100%;
    min-height: 140px;
  }
`;
export const StyledTitle = styled.h2`
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    font-size: 14px;
  }
`;
