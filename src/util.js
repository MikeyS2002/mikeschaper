import { v4 as uuidv4 } from "uuid";

import htmlcssthumb from "./img/htmlcssthumb.png";
import reactnativethumb from "./img/reactnativethumb.jpeg";
import reactthumb from "./img/reactthumb.jpeg";
import aspthumb from "./img/aspthumb.jpg";
import javascriptthumb from "./img/javascriptthumb.jpeg";

import react from "./img/react2.png";
import javascript from "./img/javascript2.png";
import asp from "./img/asp.png";
import html from "./img/html.png";

import game from "./img/game.png";
import portfolio from "./img/portfolio.png";
import scissors from "./img/scissors.png";
import music from "./img/music.png";

import wavey from "./videos/Wavey.mp4";
import rps from "./videos/RPS.mp4";
import ignite from "./videos/Ignite.mp4";
import mikeschaper from "./videos/MikeSchaper.mp4";

const calculate_age = (dob) => {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};
const age = calculate_age(new Date(2002, 1, 3));

export const CourseState = () => {
  return [
    {
      id: uuidv4(),
      title: "The Creative HTML5 & CSS3 Course",
      author: "Dev Ed",
      description:
        "Create 3 amazing, well designed and animated websites from scratch!",
      logo: html,
      img: htmlcssthumb,
      alt: "Html5 and Css3 course",
      time: "May 2020 / Juli 2020",
      link: "https://developedbyed.com/",
    },
    {
      id: uuidv4(),
      title: "The Ultimate React Native Series",
      author: "Code with mosh",
      description:
        "Master the Fundamentals of Building Native Apps with React Native and Expo",
      logo: react,
      img: reactnativethumb,
      alt: "React Native course",
      time: "August 2020 / december 2020",
      link: "https://codewithmosh.com/",
    },
    {
      id: uuidv4(),
      title: "The Creative React and Redux Course",
      author: "Dev Ed",
      description: "Build 3 Awesome Web Applications With React!",
      logo: react,
      img: reactthumb,
      alt: "React Course",
      time: "Feb 2021 / June 2021",
      link: "https://developedbyed.com/",
    },
    {
      id: uuidv4(),
      title: "ASP.NET Core 5.0 MVC Beginners Guide",
      author: "Denis Panjuta",
      description:
        "Learn ASP.NET Core 5 with MVC and Entity Framework Core- and Build a Real World Appointment Application",
      logo: asp,
      img: aspthumb,
      alt: "Asp.net Core 5.1 MVC course ",
      time: "March 2021 / june 2021",
      link: "https://www.udemy.com/user/denispanjuta/",
    },
    {
      id: uuidv4(),
      title: "20 Web Projects With Vanilla JavaScript",
      author: "Brad Traversy",
      description:
        "Build 20 mini frontend projects from scratch with HTML5, CSS & JavaScript (No frameworks or libraries)",
      logo: javascript,
      img: javascriptthumb,
      alt: "Vanilla JavaScript course",
      time: "July 2021 / present day",
      link: "https://www.udemy.com/user/brad-traversy/",
    },
  ];
};

export const AboutMeState = () => {
  return [
    {
      id: 1,
      title: "About me",
      description: `Hi, my name is Mike Schaper and I'm a ${age}-year-old student at Horizon College. I'm in my third year of college, where I study application development. In my free time, I love to program, game and fitness. When I program for myself I generally write JavaScript, I often have to write C# for school.`,
    },
    {
      id: 2,
      title: "Study",
      description:
        "My first study was 1 year of ICT management at Horizon College. In that year I realized I love programming! So I'm currently studying application development. In the future, I want to go for my bachelor's degree. ",
    },
    {
      id: 3,
      title: "Work",
      description: "I don't have any work experience in development yet.",
    },
    {
      id: 4,
      title: "Internship",
      description:
        "In the second year of my vocational college, I had to do an internship. So I had an internship for 20 weeks at the company DiStudios. Here's where I got in touch with React for the first time. In that internship, I made my first react native app through a course!",
    },
  ];
};

export const ProjectState = () => {
  return [
    {
      id: uuidv4(),
      title: "Rock paper scissors",
      icon: scissors,
      description:
        "The project replicates the game that is used to draw lots. I used animations and disabled the buttons to play when the animation is playing. I made a small score system that stores the score in the local storage.",
      language: "Vanilla JavaScript",
      video: rps,
      git: "https://github.com/MikeyS2002/rock-paper-scissors",
    },
    {
      id: uuidv4(),
      title: "Portfolio",
      icon: portfolio,
      description:
        "The project is a portfolio of me. To display what projects I did, what courses I followed, and what my experiences are. This site is made with the Javascript library React. I styled it with the 3th party library styled components.",
      language: "React",
      video: mikeschaper,
      git: "https://github.com/MikeyS2002/mikeschaper",
    },
    {
      id: uuidv4(),
      title: "Wavey",
      icon: music,
      description:
        "The project is a music player. This was my first React project made by following Dev Ed's course. I styled it with SASS.",
      language: "React",
      video: wavey,
      git: "https://github.com/MikeyS2002/Wavey",
    },
    {
      id: uuidv4(),
      title: "Ignite",
      icon: game,
      description:
        "The Project replicates IMBD but made for games. Here is where I got introduced to working with API and redux by the course of Dev Ed.",
      language: "React / Redux",
      video: ignite,
      git: "https://github.com/MikeyS2002/ignite",
    },
  ];
};
