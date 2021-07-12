import React, { useState } from "react";
import styled from "styled-components";

import { AboutMeState } from "../util";

const AboutMe = () => {
  const [about, setAbout] = useState(AboutMeState());
  const [currentAbout, setCurrentAbout] = useState(about[0]);

  return (
    <StyledAbout id="about">
      <h2>About me</h2>
      <hr />
      <AboutWrapper>
        <SideBar>
          {about.map((item) => (
            <p
              key={item.id}
              onClick={() => {
                setCurrentAbout(about[item.id - 1]);
              }}
              className={currentAbout === item ? "current" : null}
            >
              {item.title}
            </p>
          ))}
        </SideBar>
        <AboutContent>
          <p>{currentAbout.description}</p>
        </AboutContent>
      </AboutWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 5rem 10rem 0 10rem;
  @media screen and (max-width: 800px) {
    padding: 5rem 2rem 0 2rem;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  flex-direction: column;
  padding-right: 2.5rem;
  border-right: 2px solid #23272a;
  @media screen and (max-width: 500px) {
    padding-right: 1rem;
  }
  .current {
    color: white;
    :hover {
      text-decoration: none;
    }
  }
  p {
    margin-bottom: 1rem;
    cursor: pointer;
    color: #a3a3a3;
    :hover {
      text-decoration: underline;
    }
  }
`;

const AboutContent = styled.div`
  padding-left: 2.5rem;
  @media screen and (max-width: 500px) {
    padding-left: 1rem;
    p {
      font-size: 1.1rem;
    }
  }
`;

export default AboutMe;
