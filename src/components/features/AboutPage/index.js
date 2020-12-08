import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import {
  StyledText,
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
  StyledList,
  StyledTitle,
} from "./styled";
import CV from "./../../../files/Kamila Duda_CV_PL.pdf";
import CVang from "./../../../files/Kamila Duda_CV_ANG.pdf";
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
      <StyledText ref={componentRef}>{textTyping}</StyledText>
      <StyledList>
      <StyledTitle>Designing and creating websites: </StyledTitle>
      <li>HTML i CSS (semantic, RWD, Flexbox, BEM)</li>
      <li>SCSS</li>
      <li>JavaScript</li>
      <li>working with API (fetch, axios)</li>
      </StyledList>
      <StyledList>
      <StyledTitle>Working with databases:</StyledTitle>
      <li>MySQL (the basic)</li>
      </StyledList>
      <StyledList>
      <StyledTitle>Frameworks:</StyledTitle>
      <li>React (React Router, Saga, Redux Toolkit, React Hooks)</li>
      <li>Styled Components</li>
      <li>Bootstrap</li>
      </StyledList>
      <StyledList>
      <StyledTitle>Other:</StyledTitle>
      <li>GIT</li>
      <li>Github Pull Request &amp; Review</li>
      <li>Scrum</li>
      <li>Trello</li>
      <li>Markdown</li>
      </StyledList>
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
