import React from "react";
import {
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
  StyledParagraph,
} from "./CvContainer.styled";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export const CvContainer = () => {
  return (
    <StyledContainer>
      <StyledParagraph>Feel free to download my CV</StyledParagraph>
      <StyledLink
        href="assets/files/Kamila Duda_CV_ANG.pdf"
        download
        diffrentColor
      >
        English CV
        <StyledFontAwesomeIcon icon={faFilePdf} />
      </StyledLink>
      <StyledLink href="assets/files/Kamila Duda_CV_PL.pdf" download>
        Polish CV
        <StyledFontAwesomeIcon icon={faFilePdf} />
      </StyledLink>
    </StyledContainer>
  );
};
