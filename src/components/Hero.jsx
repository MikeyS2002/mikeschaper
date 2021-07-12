import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import javascript from "../img/javascript.png";
import react from "../img/react.png";
import nodejs from "../img/nodejs.png";
import { TypingAnimation } from "./TypingAnimation";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StyledHero>
        <Info
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <p>Hi, my name is</p>
          <h1>Mike Schaper</h1>
          <Text>
            <p>And I love</p>
            <TypingAnimation />
          </Text>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-60}
          >
            <button>Get in Touch</button>
          </Link>
        </Info>
        <JavascriptImg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
          src={javascript}
          alt="Javascript"
        />
        <ReactImg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          style={{
            transform: `translateY(-${offsetY * 0.6}px)`,
          }}
          src={react}
          alt="React JS"
        />
        <NodeImg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          style={{
            position: "absolute",
            transform: `translateY(-${offsetY * 0.2}px)`,
          }}
          src={nodejs}
          alt="React JS"
        />
      </StyledHero>
    </>
  );
};

const StyledHero = styled.section`
  position: relative;
  overflow-x: hidden;
  padding: 0 10rem 0 10rem;
  height: 90vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 0 2rem;
    height: 85vh;
  }
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

const Info = styled(motion.div)`
  z-index: 5;
  @media screen and (max-width: 500px) {
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    color: white;
    border: solid 3px #f0db4f;
    background-color: transparent;
    border-radius: 0.7rem;
    transition: all 0.5s ease;
    :hover {
      cursor: pointer;
      background-color: #f0db4f;
    }
  }
`;

const Text = styled.div`
  display: flex;
  p {
    //font-family: "Source Code Pro", monospace;
    margin-right: 1rem;
    font-weight: 800;
    font-size: 3rem;
    @media screen and (max-width: 850px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 600px) {
      margin-right: 0.3em;
      font-size: 1.6rem;
      color: white;
    }
  }
`;

const JavascriptImg = styled(motion.img)`
  top: 3rem;
  right: 25rem;
  position: absolute;
  z-index: 3;
  @media screen and (max-width: 1200px) {
    top: 2rem;
    right: 2rem;
  }
  @media screen and (max-width: 800px) {
    top: 2rem;
    right: 7rem;
  }
  @media screen and (max-width: 660px) {
    top: 2rem;
    right: -5rem;
  }
  @media screen and (max-width: 500px) {
    top: 1rem;
    right: -3rem;
    width: 210px;
  }
`;

const ReactImg = styled(motion.img)`
  top: 8rem;
  right: 9rem;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    top: 8rem;
    right: 6rem;
  }
  @media screen and (max-width: 800px) {
    top: 9rem;
    right: -4rem;
  }
  @media screen and (max-width: 660px) {
    top: 9rem;
    right: -2rem;
  }
  @media screen and (max-width: 500px) {
    top: 8rem;
    right: -2rem;
    width: 300px;
  }
`;

const NodeImg = styled(motion.img)`
  overflow: hidden;
  top: 23rem;
  right: 20rem;
  position: absolute;
  z-index: 2;
  @media screen and (max-width: 1200px) {
    top: 19.5rem;
    right: -1rem;
  }
  @media screen and (max-width: 800px) {
    top: 20rem;
    right: -3rem;
  }
  @media screen and (max-width: 660px) {
    top: 22.5rem;
    right: -2.5rem;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Hero;
