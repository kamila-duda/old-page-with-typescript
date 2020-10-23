import styled from "styled-components";

export const StyledImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  
`;
export const StyledTileWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 250px;
  display: flex;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blackTransparent};
  &:hover ${StyledImage} {
    z-index:-1;
  }
`;
export const StyledTitle = styled.h3`
  font-size: 18px;
`;
export const StyledDescription = styled.p`
  font-size: 15px;
  text-align: justify;
`;
export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledTag = styled.span`
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.color.primaryColor};
  display: flex;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;
