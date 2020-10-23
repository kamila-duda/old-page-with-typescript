import React from "react";
import Container from "../common/Container";
import { StyledTilesContainer } from "./styled";
import Tile from "./Tile";

const ProjectsPageNext = () => {
  
  return (
    <Container>
     
        <h2>My projects</h2>
          <StyledTilesContainer >
            <Tile />
          </StyledTilesContainer>
          </Container>
  );
};

export default ProjectsPageNext;
