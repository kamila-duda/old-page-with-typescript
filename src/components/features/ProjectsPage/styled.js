import styled from "styled-components";
import background from "../../../images/tlo.png";

export const StyledSubtitle = styled.h2`
  width: 100%;
  text-transform: uppercase;
`;
export const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
`;
export const StyledTextContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
`;
export const StyledImagesContainer = styled.div`
  width: 650px;
  min-height: 500px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 320px;
  }
`;
export const StyledCard = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  background-image: url(${background});
  justify-content: center;
  flex-direction: column;
  cursor: default;
  border-radius: 15px;
  box-shadow: 0px 0px 25px 5px ${({ theme }) => theme.color.fontColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 180px;
    height: 300px;
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;
export const StyledDetailsContainer = styled.p`
  width: 100%;
  margin: 5px 0;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledGithubLink = styled.a`
  font-size: 20px;
  margin: 5px 15px;
  text-decoration: none;
  transition: transform 1s;
  color: ${({ theme }) => theme.color.primaryColor};
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.color.lightPrimaryColor};
  }
`;
export const StyledLink = styled(StyledGithubLink)`
  font-size: 33px;
  &:hover {
    transform: scale(1.2);
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
`;
export const StyledDetail = styled.span`
  border: 2px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 15px;
  font-size: 10px;
  padding: 5px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 2px;
    margin: 1px;
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
  }
`;
export const StyledLine = styled.p`
  font-weight: bold;
  text-align: center;
`;
