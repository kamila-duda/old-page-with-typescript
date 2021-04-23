import styled from "styled-components";

export const StyledLine = styled.p`
  width: 100%;
  margin: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
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
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 20px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.color.primaryColor} 40%,
    ${({ theme }) => theme.color.lightPrimaryColor} 100%
  );
  &:hover {
    border: 3px solid ${({ theme }) => theme.color.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    font-size: 28px;
    width: 50px;
    height: 50px;
  }
`;
export const StyledImage = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
