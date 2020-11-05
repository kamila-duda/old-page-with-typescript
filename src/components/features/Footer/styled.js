import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primaryColor};
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const StyledText = styled.p`
  max-width: 1320px;
  font-size: 12px;
  margin: 0;
`;
