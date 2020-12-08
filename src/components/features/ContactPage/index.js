import React from "react";
import Container from "../../common/Container";
import {
  StyledLine,
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
} from "./styled";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Subtitle from "../../common/Subtitle";

const ContactPage = () => {
  return (
    <Container>
      <Subtitle subtitle={"Contact"} />
      <StyledLine>You can contact with me by:</StyledLine>
      <StyledContainer>
        <StyledLink href="mailto: k.duda@mailplus.pl">
          <StyledFontAwesomeIcon icon={faEnvelopeSquare} />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/kamila-duda-6676141aa/" target="_blank">
          <StyledFontAwesomeIcon icon={faLinkedin} />
        </StyledLink>
        <StyledLink href="https://github.com/kamila-duda" target="_blank">
          <StyledFontAwesomeIcon icon={faGithubSquare} />
        </StyledLink>
      </StyledContainer>
    </Container>
  );
};

export default ContactPage;
