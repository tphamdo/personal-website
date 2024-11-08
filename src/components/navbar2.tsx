import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <div className="navbar pt-3 md:pt-8 flex justify-between slide sticky top-0 z-50">
      <Link to="/" className="text-lg font-medium">
        <h1>Trueman</h1>
      </Link>
      <Link to="/work" className="text-lg font-medium">
        Work
      </Link>
    </div>
  );
}

export default Navbar2;
