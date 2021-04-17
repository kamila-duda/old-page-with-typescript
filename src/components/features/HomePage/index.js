import React from "react";
import profile from "../../../images/me.jpg";
import { StyledImage, StyledText, StyledColoredText } from "./styled";
import Container from "../../common/Container";
import IconsContainer from "./IconsContainer";

const HomePage = () => {
  return (
    <Container homepage={true}>
      <div>
        <StyledColoredText>Hello world!</StyledColoredText>
        <StyledText>
          I am Kamila <br />
          a passionate
          <br />
          Frontend Developer
        </StyledText>
        <IconsContainer />
      </div>
      <StyledImage src={profile} />
    </Container>
  );
};

export default HomePage;
