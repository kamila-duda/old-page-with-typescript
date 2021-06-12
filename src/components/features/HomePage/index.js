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
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
          }}
        >
          Hello world!
        </StyledColoredText>
        <StyledText
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 2, delay: 1 },
          }}
        >
          I am Kamila <br />
          a passionate
          <br />
          Frontend Developer
        </StyledText>
        <IconsContainer />
      </div>
      <StyledImage
        src={profile}
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 3, delay: 1.5 }}
      />
    </Container>
  );
};

export default HomePage;
