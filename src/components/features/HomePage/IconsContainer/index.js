import React from "react";
import {
  StyledWrapperIcons,
  StyledFontAwesomeIcon,
} from "./styled";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const IconsContainer = () => {
  const icons = [
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap,
    faJsSquare,
    faReact,
    faGitAlt,
  ];
  
  return (
    <StyledWrapperIcons>
      {icons.map((icon) => (
        <StyledFontAwesomeIcon key={icon.iconName} icon={icon} />
      ))}
    </StyledWrapperIcons>
  );
};

export default IconsContainer;
