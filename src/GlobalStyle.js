import { createGlobalStyle } from 'styled-components'
import background from "./images/tlo.png";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
  background-image: url(${background});
  background-size: 15%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
`;