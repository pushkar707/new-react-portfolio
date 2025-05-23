import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';

export const HERO_CONTENT = `
Hi, I'm Pushkar currently based in New Delhi, India. I am a be-focused full-stack developer, and  I have been coding since 2020 and working for 3+ years through internships(including <b>GSOC 2024</b>), contracts and currently working at a Suraasa as SDE-1.
<br/><br/>
My aim as a developer is to build softwares that impacts millions of people. I have a keen interest in building scalable and robust systems that also provide great user experience. Scroll further to check-out my tech-stack, experiences and projects`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'Oct 2024 - Present',
    role: 'Software Development Engineer 1',
    company: 'Suraasa',
    description: 'Working to Build and maintain robust Django applications and APIs, optimize database performance, and ensure secure data handling—playing a key role in delivering reliable, scalable systems with smooth user experiences.',
    technologies: ['Django', 'celery', 'GCS', 'Postgres']
  },
  {
    year: 'May 2024 - Aug 2024',
    role: 'Full stack Developer',
    company: 'Google Summer of Code (Wikimedia France)',
    description: `Converting old templates structure of <a class="underline" href="https://lingualibre.org/" target="_blank">lingualibre</a>'s website to advanced REST API structure, through Django and vue.js making it faster, efficient and more maintainable by improving querying speed and implemeting DRY prinicples. Here's the <a href="https://drive.google.com/file/d/1plrWBuDnUap7ifRGTk-HEFeHqXGpp85x/view" target="_blank" class="text-purple-800">certificate</a>`,
    technologies: ['Javascript', 'Django', 'Vue.js', 'postgres'],
  },
  {
    year: 'Feb 2024 - Apr 2024',
    role: 'Back end Developer Full-time Intern',
    company: 'RakshakCode',
    description: `Leading backend API development: Responsible for backend API and super-admin dashboard, playing a key role in scaling and managing Rakshak Code’s platform to able to handle traffic of atleast 100,000 users at a time. Here's the <a href="https://drive.google.com/file/d/16GxjBrQ-biEVdGfGGNf-xign3x76tibC/view" target="_blank" class="text-purple-800">certificate</a>`,
    technologies: ['Node.js', 'AWS', 'Redis', 'Docker', 'Next.js'],
  },
  {
    year: 'Sep 2023 - Jan 2024',
    role: 'Software Developer Full-time Intern',
    company: 'Heydaw technologies',
    description: `Implemented secure payment systems using Stripe to meet the complex subscription needs of the platform and integrated their desktop application into the website, reducing user onboarding time by 50%, significantly improving the user experience. Here's the <a href="https://drive.google.com/file/d/1eUzlGbWDB6_SHghCp4UI7c3JkbjXm1sM/view" target="_blank" class="text-purple-800">certificate</a>`,
    technologies: ['Stripe', 'Next.js', 'MERN', 'AWS', 'Tailwind'],
  },
  {
    year: 'July 2022 - Jan 2023',
    role: 'Digital Executive Full-time Intern',
    company: 'Stickman Services',
    description: `Contributed to development of various company's projects, i.e., admin dashboards for testing company, e-commerce website for e-commerce along with dashboard for products, orders and customer management, etc. Here's the <a href="https://drive.google.com/file/d/1cubAD2z9LGFgxPekDxlpKaws7Y30t37p/view" target="_blank" class="text-purple-800">certificate</a>`,
    technologies: ['Node.js', 'React', 'Vanilla.js', 'MongoDB'],
  },
];

export const PROJECTS = [
  {
    title: 'Uno online with friends (Backend focused)',
    image: project1,
    link: 'https://playuno.pushkarbansal.com/',
    description:
      'Multiplayer uno game allowing upto 4 players, using redis for horizontal scaling and state management in cae of failure, hsoted on AWS ASGs, <a href="https://medium.com/p/30e413deaa78/">Blog for working</a>.',
    technologies: ['Websockets', 'Redis', 'AWS', 'CI/CD', 'React'],
  },
  {
    title: 'Vercel Clone (Backend focused)',
    image: project2,
    link: 'https://github.com/pushkar707/vercel-clone-pushkar',
    description:
      'Vercel clone (CSR) that spins Docker containers to build apps, uploads static files to AWS S3, and serves them via a proxy server. Uses Redis and WebSockets for live deployment logs.',
    technologies: ['Docker', 'Websockets', 'Redis', 'AWS', 'MERN', 'Bash'],
  },
  {
    title: 'Learner License System',
    image: project3,
    link: 'https://github.com/pushkar707/license-creation-system',
    description:
      'Modeled after the official government system with 70% faster UI/UX, users can sign in via Firebase, access a dashboard to input details, upload documents, pay fees, take the test, and generate their license.',
    technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
  },
  {
    title: 'RakshakCode Admin dashboard',
    image: project4,
    link: 'https://admin.rakshakcode.in/',
    description:
      "Created admin dashboard to manage rakshakcode's app-content, data, courses, queries, etc.",
    technologies: ['Shadcn', 'Next.js', 'Node.js', 'Tailwind'],
  },
];

export const CONTACT = {
  address: 'New Delhi, India',
  phoneNo: '+91 7048979363',
  email: 'bansalpushkar100@gmail.com',
};
