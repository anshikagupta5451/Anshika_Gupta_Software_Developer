import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fiftyfive,
  gofindapro,
  fftCharts,
  threejs,
  mockEditor,
  roomSathi,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "FiftyFive Technologies",
    icon: fiftyfive,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Built reusable, scalable React.js components and libraries to accelerate development and ensure design consistency.",
      "Designed and implemented intuitive UI/UX from scratch, incorporating client feedback and improving overall satisfaction by 40%.",
      "Optimized GraphQL and RESTful API integrations to reduce data load times by up to 40%, enhancing performance.",
      "Led frontend performance profiling and fixes, significantly improving responsiveness across devices and browsers.",
      "Collaborated closely with cross-functional teams including DevOps and QA to streamline CI/CD processes and reduce deployment cycles.",
      "Actively participated in code reviews, enforced type safety with TypeScript, and contributed to internal documentation for team-wide standards.",
    ],
  },

  {
    title: "Software Engineer Intern",
    companyName: "FiftyFive Technologies",
    icon: fiftyfive,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Apr 2024",
    points: [
      "Developed and maintained web applications using React.js, focusing on scalable and intuitive user interfaces.",
      "Collaborated with cross-functional teams to implement secure and reliable features aligned with business requirements.",
      "Integrated CI/CD pipelines and implemented automated linting and unit tests, reducing deployment time by 15%.",
      "Promoted type safety and maintainability by adopting TypeScript across the codebase.",
      "Actively contributed to code reviews, improving code quality and knowledge sharing within the team.",
    ],
  },

  {
    title: "Machine Learning Intern",
    companyName: "goFindAPro",
    icon: gofindapro,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Worked on machine learning projects using Python, applying algorithms for data preprocessing, model training, and evaluation.",
      "Built and fine-tuned ML models for classification and prediction tasks, leveraging libraries like scikit-learn and pandas.",
      "Collaborated with the tech team to integrate ML outputs into the broader product workflow.",
      "Conducted exploratory data analysis (EDA) to uncover patterns and insights from raw datasets.",
      "Improved intermediate-level Python scripting skills and enhanced understanding of ML pipelines through hands-on implementation.",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "Mock Editor",
    description:
      "A real-time collaborative code editor that allows multiple users to write and edit code simultaneously, supporting seamless teamwork and live coding sessions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "yellow-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mockEditor,
    sourceCodeLink: "https://github.com/anshikagupta5451/mock_editor",
  },
  {
    name: "Room Sathi",
    description:
      "A web platform that helps users find ideal rooms or compatible roommates based on preferences, location, and lifestyle matches, making shared living seamless and stress-free.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: roomSathi, // replace with your image variable
    sourceCodeLink: "https://github.com/anshikagupta5451/RoomSathi", // replace with actual GitHub repo link
  },
  {
    name: "FFT Charts Package",
    description:
      "An NPM package built for internal use to render dynamic, interactive FFT charts using D3.js and Flow, enabling smooth and efficient visualization of real-time signal processing data.",
    tags: [
      {
        name: "d3.js",
        color: "orange-text-gradient",
      },
      {
        name: "flow",
        color: "green-text-gradient",
      },
      {
        name: "npm-package",
        color: "blue-text-gradient",
      },
    ],
    image: fftCharts, // replace with your actual image variable
    sourceCodeLink: "https://www.npmjs.com/package/fft-charts", // replace with internal/external repo link if available
  },
];

export { services, technologies, experiences, projects };
