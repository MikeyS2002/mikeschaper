import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BrowserView, MobileView, TabletView } from "react-device-detect";

const ProjectModal = ({ selectedId, setSelectedId, project }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSelectedId(null);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && selectedId) {
        setSelectedId(null);
      }
    },
    [setSelectedId, selectedId]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <AnimatePresence>
        {selectedId === project.id && (
          <Background
            ref={modalRef}
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <BrowserView>
              <ProjectVideo
                loop
                playsInline
                autoPlay
                webkit-playsInline
                initial={{ y: -500 }}
                animate={{ y: 0, transition: { duration: 0.5 } }}
                exit={{ y: -500, transition: { duration: 0.5 } }}
                selectedId={selectedId}
              >
                <source
                  src={project.video}
                  type="video/mp4"
                  alt={project.title}
                />
              </ProjectVideo>
            </BrowserView>

            <MobileView>
              <ProjectImg src={project.img} alt={project.title}></ProjectImg>
            </MobileView>
            <a target="_blank" rel="noreferrer" href={project.git}>
              <Github />
            </a>
          </Background>
        )}
      </AnimatePresence>
    </>
  );
};

const Background = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 11;
`;

const ProjectVideo = styled(motion.video)`
  width: 60rem;
  @media screen and (max-width: 1100px) {
    width: 50rem;
  }
  @media screen and (max-width: 700px) {
    width: 30rem;
  }
  @media screen and (max-width: 500px) {
    width: 23rem;
  }
`;

const ProjectImg = styled.img`
  width: 60rem;
  @media screen and (max-width: 1000px) {
    width: 40rem;
  }
  @media screen and (max-width: 700px) {
    width: 30rem;
  }
  @media screen and (max-width: 500px) {
    width: 23rem;
  }
`;

const Github = styled(FaGithubSquare)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  padding: 0;
  z-index: 10;
  color: white;
  @media screen and (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    top: 1rem;
    right: 1rem;
  }
`;

export default ProjectModal;
