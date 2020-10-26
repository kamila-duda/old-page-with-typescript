import React from "react";
import "./App.css";
import Navigation from "./components/features/Navigation";
import HomePage from "./components/features/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import AboutPage from "./components/features/AboutPage";
import Main from "./components/common/Main";
import ProjectsPage from "./components/features/ProjectsPage";

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
