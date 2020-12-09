import React from "react";
import Navigation from "./components/features/Navigation";
import HomePage from "./components/features/HomePage";
import AboutPage from "./components/features/AboutPage";
import Main from "./components/common/Main";
import ProjectsPage from "./components/features/ProjectsPage";
import { ScrollingProvider, Section } from "react-scroll-section";
import ContactPage from "./components/features/ContactPage";
import Footer from "./components/features/Footer";

function App() {
  return (
    <ScrollingProvider offset={-30}>
      <Navigation />
      <Main>
        <Section id="home">
          <HomePage />
        </Section>
        <Section id="about">
          <AboutPage />
        </Section>
        <Section id="projects">
          <ProjectsPage />
        </Section>
        <Section id="contact">
          <ContactPage />
        </Section>
      </Main>
      <Footer />
    </ScrollingProvider>
  );
}

export default App;
