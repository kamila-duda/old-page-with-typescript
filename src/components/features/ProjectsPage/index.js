import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";
import Container from "../../common/Container";
import {
  StyledImage,
  StyledCategoryTitle,
  StyledDetailsContainer,
  StyledDetail,
  StyledArticle,
  StyledLink,
  StyledGithubLink,
  StyledTextContainer,
  StyledProjectsContainer,
  StyledCard,
  StyledLine,
  StyledTagContainer,
} from "./styled";
import { projects } from "./projects";
import Subtitle from "../../common/Subtitle";

const ProjectsPage = () => {
  return (
    <Container backgroundColor={"#FFFFFD"} marginTop={"-5%"}>
      <Subtitle subtitle={"Projects"} />
      {projects.map((category) => (
        <StyledArticle key={category.title}>
          <StyledTextContainer>
            <StyledCategoryTitle>
              {category.title} ({category.items.length}):
            </StyledCategoryTitle>
            <p>{category.description}</p>
          </StyledTextContainer>
          <StyledProjectsContainer>
            {category.items.map((item) => (
              <StyledCard key={item.link} data-aos="fade">
                <StyledTagContainer>
                  {item.tags.map((tag) => (
                    <StyledDetail key={tag}>{tag}</StyledDetail>
                  ))}
                </StyledTagContainer>
                <StyledImage src={item.image} alt="" />
                <StyledDetailsContainer>
                  <StyledLink
                    href={item.code}
                    data-tooltip="view code"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </StyledLink>
                  <StyledLink
                    href={item.link}
                    data-tooltip="view live"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </StyledLink>
                </StyledDetailsContainer>
              </StyledCard>
            ))}
          </StyledProjectsContainer>
        </StyledArticle>
      ))}
      <StyledLine>
        For more projects, please visit my github page:{" "}
        <StyledGithubLink
          href="https://github.com/kamila-duda"
          target="_blank"
          github
        >
          "https://github.com/kamila-duda"
        </StyledGithubLink>
      </StyledLine>
    </Container>
  );
};

export default ProjectsPage;
