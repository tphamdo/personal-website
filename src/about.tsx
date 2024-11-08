import Navbar2 from './components/navbar2';
import Footer from './components/footer';
import me from './assets/images/me.jpg';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaJava,
} from 'react-icons/fa';
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoCPlusPlus,
} from 'react-icons/bi';
import { SiPrisma, SiVim, SiPython, SiExpress, SiJest } from 'react-icons/si';

const SIZE = 60;
const skillIcons = [
  <FaHtml5 size={SIZE} title={'HTML5'} />,
  <FaCss3Alt size={SIZE} title={'CSS3'} />,
  <BiLogoJavascript size={SIZE} title={'Javascript'} />,
  <BiLogoTypescript size={SIZE} title={'Typescript'} />,
  <FaReact size={SIZE} title={'React'} />,
  <FaNodeJs size={SIZE} title={'Node.js'} />,
  <BiLogoCPlusPlus size={SIZE} title={'C++'} />,
  <FaJava size={SIZE} title={'Java'} />,
  <SiPython size={SIZE} title={'Python'} />,
  <SiExpress size={SIZE} title={'Express'} />,
  <SiJest size={SIZE} title={'Jest'} />,
  <BiLogoPostgresql size={SIZE} title={'PostgreSQL'} />,
  <SiPrisma size={SIZE} title={'Prisma.io'} />,
  <FaGitAlt size={SIZE} title={'Git'} />,
  <SiVim size={SIZE} title={'Vim'} />,
  <FaLinux size={SIZE} title={'Linux'} />,
];

interface Experience {
  position: string;
  company: string;
  dates: string;
}

interface WorkProps {
  experience: Experience;
}

const WorkExperience: React.FC<WorkProps> = (props) => {
  const { experience } = props;
  return (
    <div className="mb-4">
      <h2 className="text-lg">{experience.position}</h2>
      <p className="text-neutral-700">{experience.company}</p>
      <p className="text-neutral-700 text-sm">{experience.dates}</p>
    </div>
  );
};

const experiences = [
  {
    position: 'Software Engineer L3',
    company: 'Google',
    dates: '2022-2024',
  },
  {
    position: 'Software Engineer Intern',
    company: 'JHU APL',
    dates: '2021-2022',
  },
  {
    position: 'Software Engineer Intern',
    company: 'JHU APL',
    dates: '2019',
  },
];

interface Schooling {
  degree: string;
  school: string;
  dates: string;
}

interface SchoolProps {
  school: Schooling;
}

const School: React.FC<SchoolProps> = (props) => {
  const { school } = props;
  return (
    <div className="mb-4">
      <h2 className="text-lg">{school.degree}</h2>
      <p className="text-neutral-700">{school.school}</p>
      <p className="text-neutral-700 text-sm">{school.dates}</p>
    </div>
  );
};

const schools = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Maryland, College Park',
    dates: '2018-2022',
  },
  {
    degree: 'Bachelor of Science in Mathematics',
    school: 'University of Maryland, College Park',
    dates: '2018-2022',
  },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar2 />
      <div className="max-w-3xl mx-auto mt-16">
        <div className="max-w-xl mx-auto slide delay0">
          <h1 className="text-3xl font-semibold">
            Full Stack Developer & Life-long Learner.
          </h1>
          <p className="mt-8 text-neutral-800 text-lg leading-relaxed">
            I'm Trueman, a Software Engineer with 3 years of industry
            experience. Throughout my career, I've worked on lower-level GPS
            projects as well as higher-level Android projects. Recently, I
            decided to transition my career into Web Development. I completed{' '}
            <a href="https://www.theodinproject.com/">The Odin Project</a>, an
            open source full stack course, where I got to work on a ton of cool
            projects, some of which you can find on this site.
          </p>
        </div>
        <img
          className="md:h-[600px] aspect-square mx-auto mt-12 slide delay01"
          src={me}
          alt="picture of me"
        />
        {skillIcons.length > 0 && (
          <div className="max-w-lg mx-auto slide delay02 mt-20">
            <div className="slide delay02 mt-2 flex flex-wrap gap-4 justify-center">
              {skillIcons.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
          </div>
        )}
        <div className="max-w-xl mx-auto slide delay02 mt-16">
          <h1 className="text-2xl font-medium">Work Experience</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            {experiences.map((experience, idx) => (
              <WorkExperience key={idx} experience={experience} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Education</h1>
          <div className="mt-4 grid grid-cols-1">
            {schools.map((school, idx) => (
              <School key={idx} school={school} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Contact</h1>
          <p className="text-neutral-700 mt-4">
            Feel free to reach out for collaborations, or just to say hello!
          </p>
          <p className="text-neutral-700">
            Currently seeking new opportunities.
          </p>
          <a
            href="https://www.linkedin.com/in/trueman-phamdo-691382164/"
            className="block mt-4"
          >
            Linkedin
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
