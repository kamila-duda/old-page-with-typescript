import styled from "styled-components";

export const StyledSubtitle = styled.h2`
  width: 100%;
`;
export const StyledWrapperIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
  animation: grow 6s infinite;
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  &:nth-child(6) {
    width: 70px;
    height: 70px;
    animation: rotate 15s infinite linear;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
