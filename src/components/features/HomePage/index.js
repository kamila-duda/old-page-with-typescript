import React from "react";
import profile from "../../../images/me.png";
import {
  StyledHomePage,
  StyledContainer,
  StyledImage,
  StyledText
} from "./styled";
import Container from "../../common/Container";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Container>
            <StyledContainer>
              <StyledText colored>
              &#10095;Hello, world!
              </StyledText>
              <StyledText>I'm Kamila </StyledText>
              <StyledText>Front-end</StyledText>
              <StyledText>Web Developer</StyledText>
            </StyledContainer>
            <StyledImage src={profile} />
            </Container>
    </StyledHomePage>
  );
};

export default HomePage;
