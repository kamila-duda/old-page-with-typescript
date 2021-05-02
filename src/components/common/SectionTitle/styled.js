import styled from "styled-components";

export const StyledSectionTitle = styled.h2`
  margin: 5px auto;
  padding-bottom: 10px;
  color: ${({ color }) => color};
  letter-spacing: 3px;
  border-bottom: 1px solid ${({ color }) => color};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 18px;
  }
`;
