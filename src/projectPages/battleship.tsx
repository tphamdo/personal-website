import ProjectTemplate from '../components/projectTemplate';
import projects from '../projects';

function ShoppingCartPage() {
  const project = projects.find((p) => p.name === 'battleship');
  if (!project) return <></>;

  return (
    <div className="max-w-3xl mx-auto">
      <ProjectTemplate project={project} className="slide delay01" />

      <div className="text-lg mt-8 max-w-xl mx-auto slide delay03">
        <p className="text-xl font-medium">
          This project is an implementation of the classic Battleship boardgame where
          players can challenge random opponents to a game of Battleship!

        </p>
        <p className="mt-8 text-neutral-800">
          The site can handle many concurrent games and uses WebSockets to create real-time updates to each players gameboards.
          In this project, I learned how to use Vue.js as well as Socket.io.
        </p>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
