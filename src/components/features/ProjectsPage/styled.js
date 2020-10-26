import styled from "styled-components";
import background from "../../../images/tlo.png";
import { theme } from "../../../theme";

export const StyledSubtitle = styled.h2`
  width: 100%;
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
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 0px 25px 5px black;
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
export const StyledLink = styled.a`
  font-size: 33px;
  margin: 5px 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryColor};
  &:hover {
    color: ${({ theme }) => theme.color.lightPrimaryColor};
  }
`;
export const StyledDetail = styled.span`
  border: 2px solid ${({theme})=>theme.color.primaryColor};
  border-radius: 15px;
  font-size: 10px;
  padding: 5px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 2px;
    margin: 1px;
    border: 1px solid ${({theme})=>theme.color.primaryColor};
  }
`;
