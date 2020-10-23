import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import AboutPage from "./components/AboutPage";
import Main from "./components/common/Main";
import ProjectsPage from "./components/ProjectsPage";
import ProjectsPageNext from "./components/ProjectsPageNext";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <HomePage />
      <Main>
      <AboutPage />
      <ProjectsPage/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
