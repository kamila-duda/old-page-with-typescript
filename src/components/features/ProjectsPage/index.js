import React from "react";
import ReactCardCarousel from "react-card-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";
import Container from "../../common/Container";
import {
  StyledImage,
  StyledDetailsContainer,
  StyledDetail,
  StyledSubtitle,
  StyledArticle,
  StyledLink,
  StyledGithubLink,
  StyledTextContainer,
  StyledImagesContainer,
  StyledCard,
  StyledLine,
} from "./styled";
import { projects } from "./projects";

const ProjectsPage = () => {
  return (
    <Container>
      <StyledSubtitle>My projects</StyledSubtitle>
      {projects.map((category) => (
        <StyledArticle key={category.title}>
          <StyledTextContainer>
            <h3>
              {category.title} ({category.items.length}):
            </h3>
            <p>{category.description}</p>
          </StyledTextContainer>
          <StyledImagesContainer>
            <ReactCardCarousel>
              {category.items.map((item) => (
                <StyledCard key={item.link}>
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
                  <StyledDetailsContainer>
                    {item.tags.map((tag) => (
                      <StyledDetail key={tag}>{tag}</StyledDetail>
                    ))}
                  </StyledDetailsContainer>
                </StyledCard>
              ))}
            </ReactCardCarousel>
          </StyledImagesContainer>
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
