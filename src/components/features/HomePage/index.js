import React from "react";
import profile from "../../../images/me2.jpg";
import {
  StyledImage,
  StyledText,
} from "./styled";
import Container from "../../common/Container";
import IconsContainer from "./IconsContainer";

const HomePage = () => {
  return (
      <Container homepage={true}>
        <div>
          <StyledText colored>Hello world!</StyledText>
          <StyledText>I am Kamila </StyledText>
          <StyledText>a passionate</StyledText>
          <StyledText>Frontend Developer</StyledText>
          <IconsContainer />
        </div>
        <StyledImage src={profile} />
      </Container>
  );
};

export default HomePage;
