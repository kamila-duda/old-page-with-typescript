import React from "react";
import {
  StyledWrapperIcons,
  StyledFontAwesomeIcon,
  StyledIcon,
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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 20,
  },
};

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
    <StyledWrapperIcons variants={container} initial="hidden" animate="visible">
      {icons.map((icon) => (
        <StyledIcon key={icon.iconName} variants={item}>
          <StyledFontAwesomeIcon icon={icon} />
        </StyledIcon>
      ))}
    </StyledWrapperIcons>
  );
};

export default IconsContainer;
