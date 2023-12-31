import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  nextjs,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  firebase,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  bunjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "my-projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX/UI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project Leader",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
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
    name: "Bun",
    icon: bunjs
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "mysql",
    icon: mysql,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SpeakUp",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
      "Alejandro’s tenacity and focus on understanding and solving the problem makes him a great developer",
    name: "Libier Bermudez",
    designation: "IT Product Director",
    company: "RSM US LLP",
    image: "https://i.imgur.com/IJ7RR1H.png",
  },
  {
    testimonial:
      "Alejandro's methodical approach to complex challenges and superior communication skills made him an invaluable team player. I wholeheartedly recommend Alejandro for any future engagements he seeks in the software engineering field.",
    name: "Hayk Mnatsakanyan",
    designation: "Teaching Instructor",
    company: "General Assembly",
    image: "https://avatars.githubusercontent.com/u/70010037?v=4",
  },
];

const projects = [
  {
    name: "SpeakUp",
    description:
      "SpeakUp is a web application created to enhance democratic transparency and foster active citizenship. It directly addresses the challenge of understanding complex legislative language that often obscures the true impact of laws being passed.",
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
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/b1tburn3r20/SpeakUpWeb",
  },
  {
    name: "Hyperion V2",
    description:
      "A personal side project blog I built for myself to keep myself busy and house cool new things going on with me, along with media and information I find interesting and want to share.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "youtube api",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/b1tburn3r20/HyperionV2",
  },
  {
    name: "Night Owl",
    description:
      "A website that was a group project for allowing users to CRUD forms for details on parties to bring about community and niche communities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "django framework",
        color: "pink-text-gradient",
      },
      {
        name: "team project",
        color: "blue-text-gradient",
      },
      {
        name: "lead developer",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/johntrinhvu/NightOwl",
  },
];

export { services, technologies, experiences, testimonials, projects };
