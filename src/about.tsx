import Navbar2 from './components/navbar2';
import Footer from './components/footer';
import me from './assets/images/me.jpg';

interface Experience {
  position: string;
  company: string;
  dates: string;
}

interface Props {
  experience: Experience
}

const WorkExperience: React.FC<Props> = (props) => {
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
    position: "Software Engineer",
    company: "Google",
    dates: "2022-2024",
  },
  {
    position: "Software Engineer Intern",
    company: "JHU APL",
    dates: "2021-2022",
  },
  {
    position: "Software Engineer Intern",
    company: "JHU APL",
    dates: "2019",
  },
];

function About() {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar2 />
      <div className="max-w-3xl mx-auto mt-20">
        <div className="max-w-xl mx-auto slide delay0">
          <h1 className="text-3xl font-semibold">
            Full Stack Developer & Life-long Learner.
          </h1>
          <p className="mt-8 text-neutral-800 text-lg leading-relaxed">
            I'm Trueman, a Software Engineer with 3 years of industry
            experience. Throughout my career, I've worked on lower-level GPS
            projects as well as higher-level Android projects. Recently, I
            decided to transition my career into Web Development. In pursuit of
            that goal, I completed{' '}
            <a href="https://www.theodinproject.com/">The Odin Project</a>, an
            open source full stack course, where I have done a ton of cool
            projects which you can find on this site.
          </p>
        </div>
        <img
          className="md:h-[600px] aspect-square mx-auto mt-20 slide delay01"
          src={me}
          alt="picture of me"
        />
        <div className="max-w-xl mx-auto slide delay02 mt-20">
          <h1 className="text-xl font-semibold">Work Experiences</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
            {experiences.map(experience => <WorkExperience experience={experience} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
