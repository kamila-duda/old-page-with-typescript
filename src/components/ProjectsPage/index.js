import React from "react";
import Container from "../common/Container";
import { StyledTilesContainer } from "./styled";
import Tile from "./Tile";

const ProjectsPage = () => {
  return (
    <Container
      body={
        <>
          <StyledTilesContainer>
            <Tile />
          </StyledTilesContainer>
        </>
      }
    />
  );
};

export default ProjectsPage;
