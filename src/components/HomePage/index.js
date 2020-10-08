import React from "react";
import profile from "../../images/me.png";
import {
  StyledHomePage,
  StyledImage,
  StyledText
} from "./styled";
import Container from "../common/Container";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Container
        body={
          <>
            <div>
              <StyledText colored>
              &#10095;Hello, world!
              </StyledText>
              <StyledText>I'm Kamila </StyledText>
              <StyledText>Front-end</StyledText>
              <StyledText>Web Developer</StyledText>
            </div>
            <StyledImage src={profile} />
          </>
        }
      />
    </StyledHomePage>
  );
};

export default HomePage;
