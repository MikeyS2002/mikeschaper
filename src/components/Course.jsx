import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Modal from "./Modal";
import { CourseState } from "../util";

const Course = () => {
  const [courses, setCourses] = useState(CourseState());
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Courses id="course">
      <h2>Courses I followed</h2>
      <hr />
      <CoursesGrid>
        {courses.map((course) => (
          <StyledCourse
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            key={course.id}
            onClick={() => setSelectedId(course.id)}
          >
            <CourseWrapper>
              <img src={course.logo} alt={course.alt} />
              <CourseContent>
                <h3>{course.title}</h3>
                <p>{course.time}</p>
              </CourseContent>
            </CourseWrapper>
          </StyledCourse>
        ))}
      </CoursesGrid>
      {courses.map((course) => (
        <Modal
          key={course.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          course={course}
        />
      ))}
    </Courses>
  );
};

const Courses = styled.section`
  padding: 5rem 10rem 0 10rem;
  @media screen and (max-width: 800px) {
    padding: 5rem 2rem 0 2rem;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  @media screen and (max-width: 800px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media screen and (min-width: 1450px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const StyledCourse = styled(motion.div)`
  color: white;
  box-shadow: 0px 5px 15px rgba(26, 26, 26, 0.4);
  border-radius: 1rem;
  padding: 1.5rem;
  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.9rem;
  }
  :hover {
    cursor: pointer;
  }
`;

const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 3rem;
    padding-right: 1rem;
  }
`;

const CourseContent = styled.div`
  flex-direction: column;
  p {
    margin-top: 0.5rem;
  }
`;

export default Course;
