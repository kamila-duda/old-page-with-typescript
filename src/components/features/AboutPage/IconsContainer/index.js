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
import { StyledIcon, StyledSubtitle, StyledWrapperIcons } from "./styled";


const IconsContainer = () => {
  const icons = [
    html,
    css,
    sass,
    bootstrap,
    js,
    react,
    redux,
    saga,
    mysql,
    php,
    wordpress,
    git,
    npm,
  ];
  
  return (
    <>
      <StyledSubtitle >Skills:</StyledSubtitle>
      <StyledWrapperIcons>
        {icons.map((icon) => (
          <StyledIcon src={icon} key={icon} />
        ))}
      </StyledWrapperIcons>
     
    </>
  );
};

export default IconsContainer;
