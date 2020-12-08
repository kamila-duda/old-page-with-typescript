import React from "react";
import profile from "../../../images/me.png";
import {
  StyledHomePage,
  StyledContainer,
  StyledImage,
  StyledText,
} from "./styled";
import Container from "../../common/Container";
import IconsContainer from "./IconsContainer";
import CvContainer from "./CvContainer";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Container>
        <StyledContainer>
          <StyledText colored>&#10095;Hello, world!</StyledText>
          <StyledText>I'm Kamila </StyledText>
          <StyledText>a passionate</StyledText>
          <StyledText>Frontend Developer</StyledText>
          <IconsContainer />
          <CvContainer />
        </StyledContainer>
        <StyledImage src={profile} />
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
