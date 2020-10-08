import React from "react";
import { StyledImage, StyledTileWrapper} from "./styled";
import ang from "./../../../images/ang.png";
import astronomy from "./../../../images/astronomy.png";
import cantor from "./../../../images/cantor.png";
import diet from "./../../../images/diet.png";
import lansoft from "./../../../images/lansoft.png";
import letters from "./../../../images/letterts.png";
import money from "./../../../images/money.png";
import calculator from "./../../../images/calculator.png";
import todo from "./../../../images/todo.png";
import kissi from "./../../../images/kissi.PNG";
import budo from "./../../../images/budo.PNG";

const Tile = () => {
  const projects = [
    money,
    letters,
    diet,
    cantor,
    todo,
    ang,
    astronomy,
    lansoft,
    calculator,
    kissi,
    budo,
  ];
  return (
    <>
    {
        projects.map((project) => (
          <StyledTileWrapper>
            <h1>Title Here</h1>
            <StyledImage src={project} key={project} />
    
            <p>
              Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Sed est error repellat veritatis.
            </p>
          </StyledTileWrapper>
        ))
      }
      </>
  )
};

export default Tile;
