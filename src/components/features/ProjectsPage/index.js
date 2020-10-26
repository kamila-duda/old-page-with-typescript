import React, { useRef, useEffect } from "react";
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
import { TweenMax } from "gsap";
import { Power3 } from "gsap";

const ProjectsPage = () => {
  let firstText = useRef();
  let firstCarusel = useRef();
  useEffect(() => {
    console.log(firstText, firstCarusel)
    TweenMax.staggerFrom(
      [firstText, firstCarusel],
      0.8,
      { opacity: 0, x: -400, ease: Power3.easeOut },
      0.5
    );
  });
  return (
    <Container>
      <StyledSubtitle>My projects:</StyledSubtitle>
      <StyledArticle>
        <StyledTextContainer ref={(el) => (firstText = el)}>
          <h3>Games</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum lectus magna, ac auctor est commodo eu. In tristique nunc vel
          sem egestas ornare. Morbi euismod lobortis magna at viverra. Cras eros
          diam, semper et orci a, molestie efficitur enim. Sed in augue libero.
          Proin ac ex ac arcu pretium dignissim. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Quisque ligula erat, posuere vel lacus
          eget, bibendum sagittis urna.
        </StyledTextContainer>
        <StyledImagesContainer ref={(el) => (firstCarusel = el)}>
          <ReactCardCarousel>
            <StyledCard>
              <StyledImage src={projects.games.one.money} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.games.one.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.games.one.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.games.one.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.games.two.letters} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.games.two.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.games.two.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.games.two.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
          </ReactCardCarousel>
        </StyledImagesContainer>
      </StyledArticle>
      <StyledArticle>
        <StyledTextContainer>
          <h3>Websites</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum lectus magna, ac auctor est commodo eu. In tristique nunc vel
          sem egestas ornare. Morbi euismod lobortis magna at viverra. Cras eros
          diam, semper et orci a, molestie efficitur enim. Sed in augue libero.
          Proin ac ex ac arcu pretium dignissim. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Quisque ligula erat, posuere vel lacus
          eget, bibendum sagittis urna.
        </StyledTextContainer>
        <StyledImagesContainer>
          <ReactCardCarousel>
            <StyledCard>
              <StyledImage src={projects.website.one.diet} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.website.one.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.website.one.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.website.one.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.website.two.astronomy} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.website.two.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.website.two.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.website.two.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.website.three.lansoft} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.website.three.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.website.three.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.website.three.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.website.four.kissi} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.website.four.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.website.four.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.website.five.budo} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.website.five.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.website.five.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
          </ReactCardCarousel>
        </StyledImagesContainer>
      </StyledArticle>
      <StyledArticle>
        <StyledTextContainer>
          <h3>Other</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum lectus magna, ac auctor est commodo eu. In tristique nunc vel
          sem egestas ornare. Morbi euismod lobortis magna at viverra. Cras eros
          diam, semper et orci a, molestie efficitur enim. Sed in augue libero.
          Proin ac ex ac arcu pretium dignissim. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Quisque ligula erat, posuere vel lacus
          eget, bibendum sagittis urna.
        </StyledTextContainer>
        <StyledImagesContainer>
          <ReactCardCarousel>
            <StyledCard>
              <StyledImage src={projects.other.one.cantor} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.other.one.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.other.one.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.other.one.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.other.two.todo} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.other.two.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.other.two.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.other.two.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.other.three.ang} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.other.three.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.other.three.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.other.three.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
            <StyledCard>
              <StyledImage src={projects.other.four.calculator} alt="" />
              <StyledDetailsContainer>
                <StyledLink href={projects.other.four.code}>
                  <FontAwesomeIcon icon={faCode} />
                </StyledLink>
                <StyledLink href={projects.other.four.link}>
                  <FontAwesomeIcon icon={faSearch} />
                </StyledLink>
              </StyledDetailsContainer>
              <StyledDetailsContainer>
                {projects.other.four.tags.map((tag) => (
                  <>
                    <StyledDetail>{tag}</StyledDetail>
                  </>
                ))}
              </StyledDetailsContainer>
            </StyledCard>
          </ReactCardCarousel>
        </StyledImagesContainer>
      </StyledArticle>
    </Container>
  );
};

export default ProjectsPage;
