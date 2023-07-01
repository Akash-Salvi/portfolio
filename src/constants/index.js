import {
    mobile,
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
    querylizer,
    syntax,
    neuroly,
    threejs,
    rushikesh,
    super_sapiens,
    crest,
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
      id: "technology",
      title: "Technology",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
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
      title: "React Developer",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "SuperSapiens",
      icon: super_sapiens,
      iconBg: "#383E56",
      date: "July 2021 - Jan 2022",
      points: [
        "Worked as React Frontend Developer for the company and made contribution to their new Project i.e. Decentralized Content Creation Platform",
        "I received praise for my efforts and a LinkedIn recommendation from the company’s CEO",
        "Technologies Used: ReactJs, Js, RestAPI",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Crest Data System",
      icon: crest,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Ongoing",
      points: [
        "Worked on application i.e. an automation tool to automate the work of companies Splunk Observability team. CMT tool is able to Create/Update/Delete navigators.",
        "With the tool one will be able to see all the available content in one place and can quickly play with the action buttons to perform actions like 'Validate json', 'View json', and 'Update json'. ",
        "Technologies Used: ReactJs, Typescript, Mantine, Python, FastAPI, RestAPI",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Akash is an excellent Dev & gem of a person, has an awesome problem solving skill & is a good team player. His Ability to adapt on whatever tasks he was assigned is worth the mention. All the very Best.",
      name: "Rushikesh Kardile",
      designation: "CEO",
      company: "Supersapiens",
      image: rushikesh,
    }
  ];
  
  const projects = [
    {
      name: "Querylilizerzer",
      description:
        "Create Interactive Database Diagrams. The project aims at converting the beautifully handcrafted database diagrams to SQL Queries download them. A user can insert records, update, and delete them.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
        {
          name: "RestApi",
          color: "orange-text-gradient",
        }
      ],
      image: querylizer,
      source_code_link: "https://github.com/FourDivs/Querylizer",
    },
    {
      name: "SyntaxMeet",
      description:
        "It is a real-time, collaborative coding platform to group with other members and code. Users create/join the rooms. A code editor with 19 languages support and 10+ themes, code compiler, Chat Box to discuss and code.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML CSS",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "RestApi",
          color: "orange-text-gradient",
        }
      ],
      image: syntax,
      source_code_link: "https://github.com/kothariji/SyntaxMeets",
    },
    {
      name: "Neuroly",
      description:
        "It is an online portal 👨‍💻 where a patient can book appointments✍️, view his prescriptions📝, etc. A doctor can link with various hospitals 💻, manage his appointments and upload digital prescriptions etc",
      tags: [
        {
          name: "HTML CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        }
      ],
      image: neuroly,
      source_code_link: "https://github.com/akash-salvi",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };