import React from "react";
import { StyledContainer, StyledLink, StyledFontAwesomeIcon } from "./styled";
import CV from "./../../../../files/Kamila Duda_CV_PL.pdf";
import CVang from "./../../../../files/Kamila Duda_CV_ANG.pdf";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const CvContainer = () => {
  return (
    <StyledContainer>
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
