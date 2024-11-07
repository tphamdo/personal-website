import Navbar2 from './components/navbar2';
import Footer from './components/footer';
import me from './assets/images/me.jpg';

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
    degree: "Bachelor of Science in Computer Science",
    school: "University of Maryland, College Park",
    dates: "2018-2022",
  },
  {
    degree: "Bachelor of Science in Mathematics",
    school: "University of Maryland, College Park",
    dates: "2018-2022",
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
            open source full stack course, where I have done a ton of cool
            projects which you can find on this site.
          </p>
        </div>
        <img
          className="md:h-[600px] aspect-square mx-auto mt-12 slide delay01"
          src={me}
          alt="picture of me"
        />
        <div className="max-w-xl mx-auto slide delay02 mt-12">
          <h1 className="text-2xl font-medium">Work Experiences</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            {experiences.map((experience) => (
              <WorkExperience experience={experience} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Education</h1>
          <div className="mt-4 grid grid-cols-1">
            {schools.map((school) => (
              <School school={school} />
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto slide delay02 mt-8">
          <h1 className="text-2xl font-medium">Contact</h1>
          <p className="text-neutral-700 mt-4">Feel free to reach out for collaborations, or just to say hello!</p>
          <p className="text-neutral-700">Currently seeking new opportunities.</p>
          <a href="https://www.linkedin.com/in/trueman-phamdo-691382164/" className="block mt-4">Linkedin</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
