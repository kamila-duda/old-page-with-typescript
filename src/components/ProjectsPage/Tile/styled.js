import styled from "styled-components";

export const StyledTileWrapper = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 10px;
    box-shadow: 0px -4px 51px -17px rgba(0,0,0,0.75);
    background-color: ${({theme})=> theme.color.white}
`;
export const StyledImage = styled.img`
    height: 125px;
      width: 100%;
`;