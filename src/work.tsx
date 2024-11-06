import fusc from './assets/images/file-uploader-screenshot.webp';
import Navbar from './components/navbar';

const projects = [
  {
    name: "File Uploader",
    descr: "A Google Drive Clone",
    path: "work/fileuploader",
    img: fusc,
  }
];

function Work() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <Navbar />
      <div className="mt-20 slide delay01">
        <h1 className="text-4xl font-semibold">Full Stack Developer.</h1>
      </div>
      <div className="flex flex-wrap justify-center slide delay01 mt-40">
        {projects.map((project, idx) => (
          <a key={idx} href={project.path} className="project-container text-center hover:no-underline">
            <div className="image-container h-[500px] aspect-square border-black border-[1px]">
              <img className="project-image h-full" src={project.img} alt="project picture" />
            </div>
            <p className="font-medium mt-5">{project.name}</p>
            <p className="text-neutral-700">{project.descr}</p>
          </a>
        ))}
      </div>
      <div className="slide delay02 max-w-xl mx-auto mt-40 text-lg">
        <p className="text-neutral-700 leading-relaxed">I'm Trueman, a Software Engineer based in Maryland. After working on Android for a few years, I decided I wanted to move my career to Web Development. Recently, I've completed <a className="hover:underline" target="_blank" href="https://www.theodinproject.com/">The Odin Project</a>, an open source full stack course, where I learned HTML, CSS, Typescript, React, Nodejs, PostgreSQL, Prisma, and much more.</p>
        <a href="about" className="font-medium mt-5 block">More about me</a>
      </div>
    </div>
  )
}

export default Work
