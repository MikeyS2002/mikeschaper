import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";

import heavenlyhealings from "../img/heavenlyhealings.png";

const Projects = () => {
  return (
    <>
      <StyledProjects id="projects">
        <h2>Projects I did</h2>
        <hr />
        <ProjectGrid>
          <Project>
            <div>
              <img src={heavenlyhealings} alt="Heavenly Healings" />
              <ProjectContent>
                <h3>Heavenly Healings</h3>
                <hr />
                <p>
                  A site to display information for the business Heavenly
                  Healings. I made it with completely with React, and styled is
                  with Sass. I use multiple 3th party libraries to give the
                  finishing touch wihout needing a backend.
                </p>
                <SourceCode
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.heavenlyhealings.nl/"
                >
                  <BiLinkExternal />
                </SourceCode>
              </ProjectContent>
            </div>
          </Project>
        </ProjectGrid>
      </StyledProjects>
    </>
  );
};

const StyledProjects = styled.section`
  margin: 1rem 10rem;
  @media screen and (max-width: 800px) {
    margin: 0 2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 0fr));
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

const Project = styled.div`
  border-radius: 0rem 0 1rem 1rem;
  box-shadow: 0px 5px 15px rgba(26, 26, 26, 0.4);
  img {
    width: 100%;
  }
  h3 {
    text-align: center;
    margin: 1rem;
  }
  hr {
    margin: auto;
    background: #f0db4f;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    @media screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 0 2rem;
`;

const SourceCode = styled(motion.a)`
  margin: 2rem 2rem;
  color: white;
  font-size: 2rem;
  float: right;
`;

export default Projects;
