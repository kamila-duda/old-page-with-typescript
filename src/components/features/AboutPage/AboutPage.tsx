import React, { useEffect, useRef, useState } from "react";
import { Container } from "components/common/Container/Container";
import { CvContainer } from "./CvContainer/CvContainer";
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
  StyledDecorationItem,
} from "./AboutPage.styled";
import me from "assets/images/me.png";

export const AboutPage = () => {
  const textToShow =
    "I decided to change my sector to programming. I started learning HTML, CSS, and JavaScript. After learning Bootstrap, my first page was created. Every day I systematically expand my knowledge by reading books, blogs, and attempting online courses. In my portfolio, I have websites, web applications downloading data from API, games, and a group project.";
  const [textTyping, setTextTyping] = useState("");
  const [count, setCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);
  useEffect(() => {
    if (divRef.current)
      setDivHeight(divRef.current.getBoundingClientRect().height + 80);
  }, [divRef]);

  const onScrollPage = () => {
    if (componentRef.current) {
      if (window.pageYOffset > componentRef.current.offsetTop - 400) {
        setIsScrolling(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollPage);
    return () => window.removeEventListener("scroll", onScrollPage);
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
  const setTab = (name: string) => {
    setActiveTab(name);
  };

  return (
    <>
      <Container backgroundColor="#25293E" marginTop="5%" align="flex-start">
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
          <StyledContent
            isActive={activeTab === "skills"}
            ref={divRef}
            height={divHeight}
          >
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
            <StyledContentItem>TypeScript</StyledContentItem>
            <StyledContentItem>Next.js</StyledContentItem>
            <StyledContentItem>Vue.js</StyledContentItem>
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
          <StyledContent
            isActive={activeTab === "experience"}
            height={divHeight}
          >
            <StyledTitle>march 2021 - now:</StyledTitle>
            <StyledContentItem>
              <StyledDecorationItem>Dev and Deliver</StyledDecorationItem>
              Junior Frontend Developer
            </StyledContentItem>
          </StyledContent>
          <StyledContent
            isActive={activeTab === "education"}
            height={divHeight}
          >
            <StyledTitle>2010-2015:</StyledTitle>
            <StyledContentItem>
              <StyledDecorationItem>
                Czestochowa University of Technology
              </StyledDecorationItem>
              PhD studies, Faculty Of Production Engineering And Materials
              Technology, Major: Foundry.
            </StyledContentItem>
            <StyledTitle>2009-2010:</StyledTitle>
            <StyledContentItem>
              <StyledDecorationItem>
                Silesian University of Technology
              </StyledDecorationItem>
              Masters degree, Faculty: Materials Science and Metallurgy, Major:
              Management and Production Engineering, Specialty: Health and
              Safety.
            </StyledContentItem>
            <StyledTitle>2005-2009:</StyledTitle>
            <StyledContentItem>
              <StyledDecorationItem>
                Czestochowa University of Technology
              </StyledDecorationItem>
              Engineer degree, Faculty Of Production Engineering And Materials
              Technology, Major: Management and Production Engineering,
              Specialization: Foundry Production Engineering.
            </StyledContentItem>
          </StyledContent>
        </StyledWrapper>
      </Container>
    </>
  );
};
