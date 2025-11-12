import {
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
  threejs,
  python,
  aws,
  apache_kafka,
  cplusplus,
  cypress,
  jest,
  nextjs,
  github_actions,
  postgressql,
  scikit_learn,
  java,
} from "../assets";

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'File Uploader - Google Drive Clone',
    desc: 'File Uploader is a NextJS Full-Stack Application which enables users to sign up, upload, delete, and share files and folders stored in the cloud.',
    subdesc:
      'Powered by Amazons S3 (Simple Storage Service), PostgresSQL, and Clerk, users are able to store their files on the cloud, and access them anywhere with an internet connection.',
    href: 'https://file-uploader-nextjs.vercel.app/signup',
    texture: '/textures/project/file_uploader_demo.mp4',
    logo: '/assets/project-logo2.png',
    github_link: 'https://github.com/MarwanBit/file-uploader-nextjs/tree/main',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: "NextJS",
        path: "/assets/icons8-next.js-48.png"
      },
      {
        id: 6,
        name: "AWS",
        path: "/assets/tech/aws.png"
      },
      {
        id: 7,
        name: "PostgresSQL",
        path: "/assets/tech/postgres.png"
      },
      {
        id: 8,
        name: "Cypress",
        path: "/assets/tech/cypress.png",
      }
    ],
  },
  {
    title: 'CS2 Match Predictor - An End-to-End Machine Learning Pipeline for Competitive Match Outcome Prediction',
    desc: 'CS2 Match Predictor is a Full-Stack Application built ontop of an End-to-End Machine Learning Pipeline, allowing users to predict winners of upcoming CS2 matches, alongside viewing upcoming ML powered match predictions.',
    subdesc:
      `
      Built on top of an end-to-end machine learning pipeline, the project leverages Django, BeautifulSoup, and PostgreSQL for data scraping and storage; 
      AWS Lambda, CloudWatch, and SageMaker for automated scheduling, data processing, and model training; 
      and NumPy, Pandas, and Scikit-Learn for feature engineering, model development, and evaluation.
      `,
    href: 'https://github.com/MarwanBit/cs2-infrastructure',
    texture: '/textures/project/cs2_match_predictor.mp4',
    logo: '/assets/crystal-ball.svg',
    github_link: 'https://github.com/MarwanBit/cs2-infrastructure',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 5,
        name: "Python",
        path: "/assets/tech/python.png",
      },
      {
        id: 6, 
        name: "PostgresSQL",
        path: "/assets/tech/postgres.png",
      },
      {
        id: 7,
        name: "NextJS",
        path: "/assets/icons8-next.js-48.png",
      },
      {
        id: 8,
        name: "Django",
        path: "/assets/tech/icons8-django-24.png",
      },
      {
        id: 9,
        name: "SciKit-Learn",
        path: "/assets/tech/scikit-learn.png",
      }
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Tradeweb',
    pos: 'Team Lead/Software Development Intern',
    duration: 'August 2024 - May 2025',
    title: "Led a team of six seniors in partnership with fintech firm Tradeweb to extend an Algorithmic Trading Suite. Designed reactive, asynchronous microservices using Java, Reactor Kafka, and Apache Kafka, improving throughput and scalability.",
    icon: '/assets/TW.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Harvey Mudd College',
    pos: 'Academic Excellence Tutor',
    duration: 'August 2023 - May 2025',
    title: "Collaborated with a team of Academic Excellence Tutors to deliver engaging tutoring sessions in core math topics. Facilitated three weekly tutoring sessions covering Discrete Mathematics, Multivariable Calculus, Linear Algebra, and Differential Equations.",
    icon: '/assets/hmc-logo.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'SambaTV',
    pos: 'Project Manager/Data Science Intern',
    duration: 'January 2022 – May 2022',
    title: "Led a cross-campus team to build pipelines for synthetic data generation, filtering, and pseudo-labeling of TV image datasets. Applied Computer Vision and ML techniques (e.g., photogrammetry, Efficient Diffusion) to enhance dataset quality and diversity.",
    icon: '/assets/samba-tv-logo.svg',
    animation: 'clapping',
  }
];

export const technologies = [
  // Languages
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  // Frontend Frameworks & Libraries
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // Backend & Databases
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgresSQL",
    icon: postgressql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Apache Kafka",
    icon: apache_kafka,
  },
  // Cloud & DevOps
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Github Actions",
    icon: github_actions,
  },
  // Machine Learning
  {
    name: "SciKit-Learn",
    icon: scikit_learn,
  },
  // Testing & Tools
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];
