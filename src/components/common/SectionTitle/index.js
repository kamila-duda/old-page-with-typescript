import React from "react";
import { StyledSectionTitle } from "./styled";

const SectionTitle = ({ sectionTitle, color }) => {
  return <StyledSectionTitle color={color}>{sectionTitle}</StyledSectionTitle>;
};

export default SectionTitle;
