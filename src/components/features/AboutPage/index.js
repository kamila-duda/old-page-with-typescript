import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import Subtitle from "../../common/Subtitle";
import {
  StyledText,
  StyledList,
  StyledTitle,
} from "./styled";

const AboutPage = () => {
  const textToShow =
    "In 2019, I decided to change my sector to programming. I started learning HTML, CSS, and JavaScript. After learning Bootstrap, my first page was created. Every day I systematically expand my knowledge by reading books, blogs, and attempting online courses. In my portfolio, I have websites, web applications downloading data from API, games, and a group project.";
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
      <Subtitle subtitle={"Skills"} />
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
    </Container>
  );
};

export default AboutPage;
