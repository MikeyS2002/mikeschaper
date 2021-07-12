import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Course from './components/Course';
import AboutMe from "./components/AboutMe"
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <GlobalStyle />
        <Nav />
        <Hero />
        <Projects />
        <Course />
        <AboutMe />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
