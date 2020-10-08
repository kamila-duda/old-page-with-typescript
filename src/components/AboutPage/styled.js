import styled from "styled-components";

export const StyledText = styled.p`
  position: relative;
  font-size: 20px;
  line-height: 1.6;
  height: 400px;
  width: 100%;
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
`;
