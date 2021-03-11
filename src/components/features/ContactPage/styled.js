import styled from "styled-components";

export const StyledLine = styled.p`
  width: 100%;
  text-align: center;
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
export const StyledLink = styled.a`
  font-size: 40px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 20px;
  border: 3px solid ${({ theme }) => theme.color.secondColor};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.secondColor};
  &:hover {
    color: ${({ theme }) => theme.color.primaryColor};
      border: 3px solid ${({ theme }) => theme.color.primaryColor};
    }
`;
