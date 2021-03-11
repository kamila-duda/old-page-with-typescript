import React from "react";
import {
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
  StyledParagraph,
} from "./styled";
import CV from "./../../../../files/Kamila Duda_CV_PL.pdf";
import CVang from "./../../../../files/Kamila Duda_CV_ANG.pdf";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const CvContainer = () => {
  return (
    <StyledContainer>
      <StyledParagraph>Feel free to download my CV</StyledParagraph>
      <StyledLink href={CVang} download>
        English CV
        <StyledFontAwesomeIcon icon={faFilePdf} />
      </StyledLink>
      <StyledLink href={CV} download>
        Polish CV
        <StyledFontAwesomeIcon icon={faFilePdf} />
      </StyledLink>
    </StyledContainer>
  );
};

export default CvContainer;
