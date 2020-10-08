import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import AboutPage from "./components/AboutPage";
import Main from "./components/common/Main";
import ProjectsPage from "./components/ProjectsPage";


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
