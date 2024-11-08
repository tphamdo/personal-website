interface Project {
  title: string;
  codeLink: string;
  videoSrc: string;
  siteLink?: string;
}

interface Props {
  project: Project;
  className: string;
}

const ProjectTemplate: React.FC<Props> = (props) => {
  const { title, codeLink, videoSrc, siteLink } = props.project;
  const { className } = props;

  return (
    <div className={className}>
      <h1 className="text-3xl font-semibold mt-12 slide delay01">{title}</h1>
      <div className="video-container mt-8 aspect-video mx-auto rounded-md overflow-hidden slide delay02">
        <video controls autoPlay loop muted className="w-full h-full">
          <source src={videoSrc} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="text-right mt-10 slide delay02">
        <a href={codeLink} target="_blank" className="font-medium px-3">
          Code
        </a>
        {siteLink && (
          <a href={siteLink} target="_blank" className="font-medium px-3">
            Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectTemplate;
