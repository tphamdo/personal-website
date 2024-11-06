function Project() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="mt-24 aspect-video w-[90%] mx-auto">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JUTATCoc5IA?si=TPmEWqtsjAUEiV4A&amp;rel=0&amp;modestbranding=1&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=JUTATCoc5IA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Project;
