import React, { useEffect } from "react";
import Navigation from "./components/features/Navigation";
import HomePage from "./components/features/HomePage";
import AboutPage from "./components/features/AboutPage";
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
