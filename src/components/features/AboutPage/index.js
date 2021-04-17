import React, { useEffect, useRef, useState } from "react";
import Container from "../../common/Container";
import Subtitle from "../../common/Subtitle";
import CvContainer from "./CvContainer";
import {
  StyledListItem,
  StyledImageWrapper,
  StyledText,
  StyledList,
  StyledTitle,
  StyledWrapper,
  StyledImage,
  StyledContent,
  StyledContentItem,
} from "./styled";
import me from "./../../../images/me.png";

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
      window.removeEventListener("scroll", onScrollPage);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollPage);
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

  const [activeTab, setActiveTab] = useState("skills");
  const setTab = (name) => {
    setActiveTab(name);
  };

  return (
    <>
      <Container
        backgroundColor={"#25293E"}
        marginTop={"100vh"}
        align={"flex-start"}
      >
        <StyledImageWrapper>
          <StyledImage src={me} />
          <CvContainer />
        </StyledImageWrapper>
        <StyledWrapper>
          <StyledText ref={componentRef}>{textTyping}</StyledText>
          <StyledList>
            <StyledListItem
              isActive={activeTab === "skills"}
              onClick={() => setTab("skills")}
            >
              Skills
            </StyledListItem>
            <StyledListItem
              isActive={activeTab === "experience"}
              onClick={() => setTab("experience")}
            >
              Experience
            </StyledListItem>
            <StyledListItem
              isActive={activeTab === "education"}
              onClick={() => setTab("education")}
            >
              Education
            </StyledListItem>
          </StyledList>
          <StyledContent isActive={activeTab === "skills"}>
            <StyledTitle>
              Technology Stack for Web Application Development:
            </StyledTitle>
            <StyledContentItem>
              HTML i CSS (semantic, RWD, Flexbox, BEM), SCSS
            </StyledContentItem>
            <StyledContentItem>JavaScript</StyledContentItem>
            <StyledContentItem>
              React (React Router, Saga, Redux Toolkit, React Hooks)
            </StyledContentItem>
            <StyledContentItem>Styled Components</StyledContentItem>
            <StyledContentItem>Bootstrap</StyledContentItem>
            <StyledContentItem>
              working with API (fetch, axios)
            </StyledContentItem>
            <StyledTitle>Working with databases:</StyledTitle>
            <StyledContentItem>MySQL (the basic)</StyledContentItem>
            <StyledTitle>Other:</StyledTitle>
            <StyledContentItem>
              GIT, Github Pull Request &amp; Review
            </StyledContentItem>
            <StyledContentItem>Scrum</StyledContentItem>
            <StyledContentItem>Trello, Jira</StyledContentItem>
            <StyledContentItem>Markdown</StyledContentItem>
          </StyledContent>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default AboutPage;
