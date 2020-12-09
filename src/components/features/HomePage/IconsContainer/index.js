import React from "react";
import html from "../../../../images/html-5.svg";
import css from "../../../../images/css.svg";
import sass from "../../../../images/sass.svg";
import js from "../../../../images/js.svg";
import react from "../../../../images/react.svg";
import redux from "../../../../images/redux.svg";
import saga from "../../../../images/saga.svg";
import bootstrap from "../../../../images/bootstrap.svg";
import mysql from "../../../../images/mysql.svg";
import php from "../../../../images/php.svg";
import wordpress from "../../../../images/wordpress.svg";
import git from "../../../../images/git.svg";
import npm from "../../../../images/npm.svg";
import {
  StyledSubtitle,
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
        <StyledFontAwesomeIcon icon={icon} />
      ))}
    </StyledWrapperIcons>
  );
};

export default IconsContainer;
