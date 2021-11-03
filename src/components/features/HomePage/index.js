import React from "react";
import profile from "../../../images/me.jpg";
import { StyledImage, StyledText, StyledColoredText } from "./styled";
import Container from "../../common/Container";
import IconsContainer from "./IconsContainer";

const HomePage = () => {
  return (
    <Container homepage={true}>
      <div>
        <StyledColoredText
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          Hello world!
        </StyledColoredText>
        <StyledText
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
        >
          I am Kamila <br />
          a passionate
          <br />
          Front-End Developer
        </StyledText>
        <IconsContainer />
      </div>
      <StyledImage
        src={profile}
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </Container>
  );
};

export default HomePage;
