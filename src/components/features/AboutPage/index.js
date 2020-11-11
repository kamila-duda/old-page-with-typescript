import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import IconsContainer from "../AboutPage/IconsContainer";
import {
  StyledText,
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
} from "./styled";
import CV from "./../../../files/CVKamilaDuda.pdf";
import CVang from "./../../../files/KDudaCVang.pdf";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const AboutPage = () => {
  const textToShow =
    "In 2019, I decided to change my sector to programming. I started learning HTML, CSS, and JavaScript. After learning Bootstrap, my first page was created. Every day I systematically expand my knowledge by reading books, blogs, and attempting online courses. I know the basics of PHP, MySQL, XML, and AJAX, I used also the WordPress platform. In my portfolio, I have websites, web applications downloading data from API, games, and a group project.";
  const [textTyping, setTextTyping] = useState("");
  const [count, setCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const componentRef = useRef(null);

  const onScrollPage = () => {
    if (window.pageYOffset > componentRef.current.offsetTop - 400) {
      setIsScrolling(true);
      window.removeEventListener("scroll", onScrollPage)
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", onScrollPage)
  }, []);

  useEffect(() => {
    if (isScrolling) {
      const timeoutId = setTimeout(() => {
        if (count < textToShow.length) {
          setCount((count) => count + 1);
          setTextTyping((textTyping) => textTyping + textToShow.charAt(count));
        }
      }, 5);

      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [count, isScrolling]);

  return (
    <Container>
      <IconsContainer />
      <StyledText ref={componentRef}>{textTyping}</StyledText>
      <StyledContainer>
        <StyledLink href={CVang} download>
          CV in English<StyledFontAwesomeIcon icon={faFilePdf} />
        </StyledLink>
        <StyledLink href={CV} download>
          CV in Polish<StyledFontAwesomeIcon icon={faFilePdf} />
        </StyledLink>
      </StyledContainer>
    </Container>
  );
};

export default AboutPage;
