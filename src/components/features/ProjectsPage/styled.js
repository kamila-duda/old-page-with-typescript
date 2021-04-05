import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
`;
export const StyledCategoryTitle = styled.h3`
  color: ${({ theme }) => theme.color.primaryColor};
  text-transform: uppercase;
`;
export const StyledProjectsContainer = styled.div`
  position: relative;
  display: grid;
  height: auto;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const StyledDetailsContainer = styled.p`
  position: absolute;
  display: none;
  width: 60%;
  height: max-content;
  left: 20%;
  top: 30%;
  background-color: ${({ theme }) => theme.color.white};
  border: 3px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const StyledCard = styled.div`
  position: relative;
  margin: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    &:hover {
      ${StyledDetailsContainer}{
         display: block;
      }
   }
  }
`;
export const StyledImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`;
export const StyledGithubLink = styled.a`
  margin: 5px 15px;
  text-decoration: none;
  transition: transform 1s;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.color.primaryColor};
  }
  ${({ github }) =>
    github &&
    css`
      background-color: ${({ theme }) => theme.color.white};
      padding: 10px;
      border: 3px solid ${({ theme }) => theme.color.primaryColor};
      border-radius: 50px;
      color: ${({ theme }) => theme.color.primaryColor};
      display: block;
      &:hover {
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primaryColor};
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;
export const StyledLink = styled(StyledGithubLink)`
  font-size: 64px;
  color: ${({ theme }) => theme.color.primaryColor};
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.color.secondColor};
    &::before {
      content: attr(data-tooltip);
      position: absolute;
      font-size: 12px;
      text-align: center;
      width: 200%;
      left: -50%;
      top: -15px;
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
      border-radius: 15px;
      background-color: ${({ theme }) => theme.color.white};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 36px;
  }
`;
export const StyledTagContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(5, 5, 5, 0) 5%,
    rgba(255, 255, 255, 1) 80%
  );
`;
export const StyledDetail = styled.span`
  border: 2px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 15px;
  font-size: 10px;
  padding: 5px;
  margin: 2px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 2px;
    margin: 1px;
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
  }
`;
export const StyledLine = styled.p`
  font-weight: bold;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;
