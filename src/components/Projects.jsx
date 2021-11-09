import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ProjectModal from "./ProjectModal";
import { ProjectState } from "../util";

const Projects = () => {
  const [projects, setProjects] = useState(ProjectState());
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <StyledProjects id="projects">
        <h2>Projects I did</h2>
        <hr />

        <ProjectGrid>
          {projects.map((project) => (
            <ProjectWrapper
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
            >
              <ProjectContent>
                <ProjectHeader>
                  <img src={project.icon} alt={project.title} />
                  <h3>{project.title}</h3>
                </ProjectHeader>
                <p>{project.description}</p>
                <p className="language">{project.language}</p>
              </ProjectContent>
            </ProjectWrapper>
          ))}
        </ProjectGrid>
        {projects.map((project) => (
          <ProjectModal
            key={project.id}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            project={project}
          />
        ))}
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  @media screen and (max-width: 800px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (min-width: 1450px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
`;

const ProjectWrapper = styled(motion.div)`
  color: white;
  box-shadow: 0px 5px 15px rgba(26, 26, 26, 0.4);
  border-radius: 1rem;
  padding: 1.5rem;
  h3 {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
  }
`;

const ProjectContent = styled.div`
  .language {
    padding-top: 0.5rem;
    font-size: 0.9rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  h3 {
    padding-bottom: 0.5rem;
    flex-direction: row;
  }
  img {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 1rem;
  }
`;

export default Projects;
