import React from "react";
import {
  StyledWrapperIcons,
  StyledFontAwesomeIcon,
  StyledIcon
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
        <StyledIcon>
          <StyledFontAwesomeIcon key={icon.iconName} icon={icon} />
        </StyledIcon>
      ))}
    </StyledWrapperIcons>
  );
};

export default IconsContainer;
