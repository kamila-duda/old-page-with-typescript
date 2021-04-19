import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme.color.lighterPrimaryColor};
  width: 100%;
  margin: -5% auto;
  border-radius: 50px 50px 0 0;
`;
export const StyledWrapper = styled.footer`
  padding: 20px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    justify-content: center;
  }
`;
export const StyledText = styled.p`
  padding: 5px 10px;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;
