import styled from "styled-components";

export const StyledText = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;
  min-height: 400px;
  width: 100%;
  margin-top: 20px;
  text-align: justify;
  &::after{
    content:"_";
    position: absolute;
    font-weight: bold;
    animation: pulse 0.5s infinite;
  }
  @keyframes pulse {
    0%{opacity:1}
    50%{opacity:0}
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
    font-weight: normal;
  }
`;
