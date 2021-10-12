import React from "react";
import { Navigation } from "./components/features/Navigation/Navigation";
import { HomePage } from "./components/features/HomePage/HomePage";
import { AboutPage } from "./components/features/AboutPage/AboutPage";
import { ProjectsPage } from "./components/features/ProjectsPage/ProjectsPage";
import { ScrollingProvider, Section } from "react-scroll-section";
import { ContactPage } from "./components/features/ContactPage/ContactPage";
import { Footer } from "./components/features/Footer/Footer";
import { UpButton } from "./components/common/UpButton/UpButton";

function App() {
  return (
    <ScrollingProvider offset={-50}>
      <Navigation />
      <UpButton />
      <HomePage />
      <Section id="about me">
        <AboutPage />
      </Section>
      <Section id="my projects">
        <ProjectsPage />
      </Section>
      <Section id="contact me!">
        <ContactPage />
      </Section>
      <Footer />
    </ScrollingProvider>
  );
}

export default App;
