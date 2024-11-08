import Navbar from './components/navbar';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import projects from './projects';

function Work() {
  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar />

      <div className="mt-20 slide delay01">
        <h1 className="text-4xl font-semibold">Full Stack Developer.</h1>
      </div>

      <div className="flex flex-wrap justify-around gap-y-12 gap-x-8 slide delay02 mt-24 h-fit">
        {projects.map((project, idx) => (
          <Link
            to={`work/${project.name}`}
            key={idx}
            className="work-item project-container text-center hover:no-underline"
          >
            <div
              className={`image-container max-h-[400px] aspect-square border-black border-[1px]`}
            >
              <img
                className="project-image h-full"
                src={project.img}
                alt="project picture"
              />
            </div>
            <p className="font-medium mt-4">{project.title}</p>
            <p className="text-neutral-700">{project.descr}</p>
          </Link>
        ))}
      </div>

      <div className="slide delay02 max-w-xl mx-auto mt-20 text-lg">
        <p className="text-neutral-700 leading-relaxed">
          I'm Trueman, a Software Engineer based in Maryland. After working on
          Android for a few years, I decided I wanted to move my career to Web
          Development. Recently, I've completed{' '}
          <a
            className="hover:underline"
            target="_blank"
            href="https://www.theodinproject.com/"
          >
            The Odin Project
          </a>
          , an open source full stack course, where I learned HTML, CSS,
          Typescript, React, Nodejs, PostgreSQL, Prisma, and much more.
        </p>
        <Link to="/about" className="font-medium mt-5 block">
          More about me
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Work;
