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
  meta,
  starbucks,
  tesla,
  vconstruct,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nirmaan,
  scheduleViewer,
  modelViewer,
  ideation
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js",
    icon: web,
  },
  {
    title: "JavaScript",
    icon: mobile,
  },
  {
    title: "Autodesk Forge",
    icon: creator,
  },
  {
    title: "NoSQL",
    icon: mobile,
  },
  {
    title: "Azure",
    icon: backend,
  },
  {
    title: "MUI",
    icon: mobile,
  },
  {
    title: "GraphQL",
    icon: mobile,
  },
  {
    title: "Nx",
    icon: mobile,
  },
];

const technologies = [
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

const experiences = [
  {
    title: "Software Engineer",
    company_name: "vConstruct Pvt. Ltd.",
    icon: vconstruct,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Built web solutions using React and front-end technologies to address construction challenges. Collaborated on design and implemented products using Agile methodology.",
      "Demonstrated expertise in front-end development, independent problem-solving, and showcased skills through successful proof-of-concept implementations for product development. Assumed complete ownership of component development, database integration, and application performance optimization.",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Software Engineer - intern",
    company_name: "vConstruct Pvt. Ltd.",
    icon: vconstruct,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Virtual Construction Site",
    description:
      "Transforming ideation into a fully-fledged application product through effective execution of multiple proof-ofconcepts (POCs). A team of 8 members in developing vConstruct's inaugural in-house product. Developing a cutting-edge platform for seamless creation and management of construction projects, benefiting 70% of the industry. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: nirmaan,
    source_code_link: "https://vconstruct.featureos.app/p/virtual-construction-site-platform-for-advanced-construction-management",
    source_image: ideation,
  },
  {
    name: "Primavera P6 Data Viewer",
    description:
      "Got Live data from Oracle primavera app and used to show Gantt chart in react web application. Build NPM web package that simplifies, easy to integrate with an intuitive, collaborative interface. Reduce $5M cost per year saving in tracking, planning, and quality for 3K Progress Report users. Collaborated with cross-functional teams to ensure successful project delivery. Maintained Coding standards",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "Bryntum",
        color: "blue-text-gradient",
      },
    ],
    image: scheduleViewer,
    // source_code_link: "https://github.com/",
    // source_image: nirmaan,
  },
  {
    name: "Forge based Model Viewer",
    description:
      "Developed a POC web app for 3D model and 2D sheet viewing, collaboration, and analysis. Implemented synchronous/asynchronous techniques to enhance model loading performance and reduce load time. Explored methods to utilize BIM Models for Quantity Take-Off in construction",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Forge API's",
        color: "pink-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
    ],
    image: modelViewer,
    // source_code_link: "https://github.com/",
    // source_image: nirmaan,
  },
  
];

export { services, technologies, experiences, testimonials, projects };
