import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link, animateScroll } from "react-scroll";
import { motion } from "framer-motion";

import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <>
      <StyledNav>
        <Logo onClick={() => animateScroll.scrollToTop()}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={logo}
            alt="Logo of Mike Schaper"
          />
        </Logo>
        <NavLinks>
          <NavLink
            to="projects"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-130}
          >
            Projects
          </NavLink>
          <NavLink
            to="course"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-60}
          >
            Courses
          </NavLink>
          <NavLink
            to="about"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-60}
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={-60}
          >
            Contact
          </NavLink>
        </NavLinks>
        <Socials>
          <Social whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/MikeyS2002"
            >
              <FaGithubSquare />
            </a>
          </Social>
          <Social whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mike-schaper-906748212/"
            >
              <FaLinkedin />
            </a>
          </Social>
        </Socials>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  @media screen and (min-width: 800px) {
    padding: 1rem 10rem;
  }
  display: flex;
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index: 6;
  justify-content: space-between;
  background: #23272a;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    Links {
      order: 2;
    }
    Socials {
      order: 1;
    }
  }
`;

const Logo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
  @media screen and (max-width: 800px) {
    margin: 1rem 0 0.5rem 0;
    order: 1;
  }

  :hover {
    cursor: pointer;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    order: 2;
  }
`;

const NavLink = styled(Link)`
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid transparent;
  :hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: 3px solid #f0db4f;
  }
`;

const Socials = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Social = styled(motion.div)`
  font-size: 2.5rem;
  margin-left: 1rem;
  a {
    color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

export default Nav;
