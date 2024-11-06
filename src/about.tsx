import Navbar from './components/navbar';
import me from './assets/images/me.jpg';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <Navbar />
      <img className="md:h-[700px] aspect-square mx-auto mt-20 mb-64 slide delay02" src={me} alt="picture of me" />
      <h1>About</h1>
    </div>
  )
}

export default About;
