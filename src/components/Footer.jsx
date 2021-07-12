import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} Mike Schaper</p>
      <Social whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MikeyS2002"
        >
          <FaGithubSquare />
        </a>
      </Social>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  display: flex;
  min-height: 10vh;
  padding: 0 10rem;
  align-items: center;
  background: #23272a;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    padding: 0rem 2rem 0 2rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

const Social = styled(motion.div)`
  @media screen and (min-width: 800px) {
    display: none;
  }
  font-size: 2.5rem;
  margin-left: 1rem;
  a {
    color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

export default Footer;
