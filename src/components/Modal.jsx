import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";

const Modal = ({ selectedId, setSelectedId, course }) => {
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
    <AnimatePresence>
      {selectedId === course.id && (
        <Background
          ref={modalRef}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <ModalWrapper
            initial={{ y: -500 }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -500, transition: { duration: 0.5 } }}
            selectedId={selectedId}
          >
            <ModalImg src={course.img} alt={course.title} />
            <ModalContent>
              <h3>{course.title}</h3>
              <p className="description">{course.description}</p>
              <p>
                By:{" "}
                <a href={course.link} target="_blank" rel="noreferrer">
                  {course.author}
                </a>
              </p>
              <p>{course.time}</p>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => {
                setSelectedId(null);
              }}
            ></CloseModalButton>
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

const Background = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 11;
`;

const ModalWrapper = styled(motion.div)`
  margin: 1rem;
  width: 55rem;
  height: 27rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #2c2f33;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 12;
  border-radius: 1rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 31rem;
  }
  @media screen and (max-width: 357px) {
    height: 33rem;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
  @media screen and (max-width: 600px) {
    height: 15rem;
    border-radius: 1rem 1rem 0 0;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  color: white;
  padding: 0rem 2rem 0 1rem;
  h3 {
    font-size: 1.7rem;
  }
  .description {
    font-size: 0.9rem;
    color: #e6e6e6;
    padding: 0 0 0.9rem 0;
  }
  a {
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.1rem;
    }
    padding: 0.5rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
  background: white;
  border-radius: 50%;
  color: #2c2f33;
`;

export default Modal;
