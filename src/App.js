import React, { useEffect } from "react";
import Navigation from "./components/features/Navigation";
import HomePage from "./components/features/HomePage";
import AboutPage from "./components/features/AboutPage";
import Main from "./components/common/Main";
import ProjectsPage from "./components/features/ProjectsPage";
import { ScrollingProvider, Section } from "react-scroll-section";
import ContactPage from "./components/features/ContactPage";
import Footer from "./components/features/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import UpButton from "./components/common/UpButton";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ScrollingProvider offset={-30}>
      <Navigation />
      <Main>
        <UpButton/>
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
