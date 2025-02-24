import { ReactElement } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projects from './projects';
import FileUploaderPage from './projectPages/fileUploader';
import MembersOnlyPage from './projectPages/membersOnly';
import BlogApiPage from './projectPages/blogApi';
import ShoppingCartPage from './projectPages/shoppingCart';
import BattleshipPage from './projectPages/battleship';
import Navbar from './components/navbar';
import Footer from './components/footer';

function Project() {
  const { projectName } = useParams();

  const project = projects.find((p) => p.name === projectName);
  if (!project) return <Navigate to="/" />;

  let projectPage: ReactElement | null = null;
  switch (projectName) {
    case 'fileuploader':
      projectPage = <FileUploaderPage />;
      break;
    case 'membersonly':
      projectPage = <MembersOnlyPage />;
      break;
    case 'blogapi':
      projectPage = <BlogApiPage />;
      break;
    case 'shoppingcart':
      projectPage = <ShoppingCartPage />;
      break;
    case 'battleship':
      projectPage = <BattleshipPage />;
      break;
    default:
      return <Navigate to="/" />;
  }

  return (
    <div className="max-w-4xl mx-auto px-3">
      <Navbar />
      {projectPage}
      <Footer />
    </div>
  );
}

export default Project;
