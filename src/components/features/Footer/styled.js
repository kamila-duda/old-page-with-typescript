import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primaryColor};
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({theme})=>theme.breakpoint.xs}){
    justify-content: center;
  }
`;
export const StyledText = styled.p`
  padding: 5px 10px;
  font-size: 12px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;
