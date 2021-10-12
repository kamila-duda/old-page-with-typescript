import React from "react";
import { Container } from "components/common/Container/Container";
import {
  StyledLine,
  StyledContainer,
  StyledLink,
  StyledImage,
} from "./ContactPage.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { SectionTitle } from "components/common/SectionTitle/SectionTitle";
import profile from "assets/images/me.jpg";

export const ContactPage = () => {
  return (
    <Container
      backgroundColor="#25293E"
      marginTop="-5%"
      marginBottom="0%"
      direction="column"
    >
      <SectionTitle sectionTitle="Contact" color="#FFFFFF" />
      <StyledImage src={profile} />
      <StyledLine>
        Let's stay in touch <br />
        You can contact with me by:
      </StyledLine>
      <StyledContainer>
        <StyledLink href="mailto: kamiladuda@int.pl">
          <FontAwesomeIcon icon={faAt} />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/kamila-duda"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink href="https://github.com/kamila-duda" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </StyledLink>
      </StyledContainer>
    </Container>
  );
};
