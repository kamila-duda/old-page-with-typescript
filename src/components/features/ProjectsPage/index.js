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
  StyledTextContainer,
  StyledImagesContainer,
  StyledCard,
} from "./styled";
import { projects } from "./projects";

const ProjectsPage = () => {
  return (
    <Container>
      <StyledSubtitle>My projects:</StyledSubtitle>
      {projects.map((category) => (
        <StyledArticle>
          <StyledTextContainer>
            <h3>{category.title}</h3>
            <p>Bla</p>
          </StyledTextContainer>
          <StyledImagesContainer>
            <ReactCardCarousel>
              {category.items.map((item) => (
                <StyledCard>
                  <StyledImage src={item.image} alt="" />
                  <StyledDetailsContainer>
                    <StyledLink href={item.code}>
                      <FontAwesomeIcon icon={faCode} />
                    </StyledLink>
                    <StyledLink href={item.link}>
                      <FontAwesomeIcon icon={faSearch} />
                    </StyledLink>
                  </StyledDetailsContainer>
                  <StyledDetailsContainer>
                    {item.tags.map((tag) => (
                      <>
                        <StyledDetail>{tag}</StyledDetail>
                      </>
                    ))}
                  </StyledDetailsContainer>
                </StyledCard>
              ))}
            </ReactCardCarousel>
          </StyledImagesContainer>
        </StyledArticle>
      ))}
    </Container>
  );
};

export default ProjectsPage;
